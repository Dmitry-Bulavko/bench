import { Component, HostBinding, HostListener, Input, OnInit, ViewContainerRef } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';
import { ElementsFactory } from '../../services/elements.factory.service';
import { PlaceConstructorFacadeService } from '../../store/facade.service';
import { AreaElement } from '../../models/area-element.model';

@Component({
  selector: 'g[bench-area-element]',
  templateUrl: './area-element.component.svg',
  styleUrls: ['./area-element.component.scss'],
})
export class AreaElementComponent implements OnInit {
  element: string;
  @Input() data: AreaElement;

  public isActiveElement = false;

  private isDragStart = false;

  private elementInstance: AreaElement;

  constructor(
    private placeConstructorService: PlaceConstructorFacadeService,
    private elementFactory: ElementsFactory,
    private elementRef: ViewContainerRef
  ) { }

  @HostBinding('style.transform') rotateDeg = `rotate(0deg)`;
  ngOnInit(): void {
    this.placeConstructorService.activeElement$
      .subscribe((activeElement) => {
        this.isActiveElement = activeElement === this.data.id
      });
    this.elementInstance = this.elementFactory.create(this.data.type, this.data);
    this.element = this.elementInstance.getElement();
    this.rotateDeg = `rotate(${this.elementInstance.rotate}deg)`
    this.placeConstructorService.areaElements$.subscribe(arEl => console.log({arEl}));

    this.placeConstructorService.areaElements$
    .pipe(
      distinctUntilChanged((a, b) => {
        return JSON.stringify(a) === JSON.stringify(b)
      })
    )
    .subscribe(elements => {
      console.log(`rotate(${elements.get(this.elementInstance.id).rotate}deg)`)
      // this.rotateDeg = `rotate(${elements.get(this.elementInstance.id).rotate}deg)`;
    })
  }

  @HostListener('mousedown', ['$event'])
  startDrag(event) {
    this.placeConstructorService.setActiveElement(this.data.id)
    this.isDragStart = true;
  }

  @HostListener('mousemove', ['$event'])
  drag(event) {
    if (this.isActiveElement && this.isDragStart) {
      console.log(event)
      const movedElement = this.elementRef.element.nativeElement.children[0].children[0];
      movedElement.setAttribute('x',event.offsetX - (movedElement.attributes.width.value / 2));
      movedElement.setAttribute('y',event.offsetY - (movedElement.attributes.height.value / 2));
    }
  }

  @HostListener('mouseup', ['$event'])
  // @HostListener('mouseleave', ['$event'])
  endDrag(event) {
    if (this.isActiveElement && this.isDragStart) {
      this.placeConstructorService.changeElement(this.data.id, {
        ...this.data,
        x: event.offsetX,
        y: event.offsetY
      } as AreaElement)
    }
    this.isDragStart = false;
  }
}
