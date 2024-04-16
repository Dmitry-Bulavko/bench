import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { ElementsFactory } from '../../services/elements.factory.service';
import { PlaceConstructorFacadeService } from '../../store/facade.service';
import { AreaElement } from '../../models/area-element.model';

@Component({
  selector: 'bench-place-area',
  templateUrl: './place-area.component.html',
  styleUrls: ['./place-area.component.scss']
})
export class PlaceAreaComponent implements OnInit {
  private activeElementId$: Observable<string> = this.placeConstructorService.activeElement$;
  private activeControl: string = '';
  private layerSize$: Observable<{width: number; height: number}> = this.placeConstructorService.layarSize$;
  @Input() elements: AreaElement[];
  
  public layerConfig = {
    width: null,
    height: null,
    viewBox: null
  }

  constructor(
    private placeConstructorService: PlaceConstructorFacadeService,
    private elementsFactory: ElementsFactory
  ) { }

  @HostListener('click', ['$event'])
  onClick(event: PointerEvent) {
    if (this.activeControl) {
      this.placeConstructorService.addElement(
        this.elementsFactory.create(this.activeControl, {
          x: event.offsetX,
          y: event.offsetY,
        } as AreaElement)
      )
    }
  }

  @HostListener('moueup', ['$event']) 
  onMouseUp(event){
    console.log(event)
  }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event: PointerEvent) {
    event.preventDefault();
    this.placeConstructorService.setActiveControl('');
    this.placeConstructorService.setActiveElement('');
  }

  ngOnInit(): void {
    this.layerSize$.subscribe(
      layerSize => {
        console.log(layerSize)
        this.layerConfig = {
          width: layerSize.width + 'px',
          height: layerSize.height + 'px',
          viewBox: `0 0 ${layerSize.width} ${layerSize.height}`,
        }
      }
    )

    this.placeConstructorService.activeControl$.pipe(startWith('')).subscribe((control) => this.activeControl = control );
  }

  logData(e: CdkDragEnd) {
    console.log(e.source.element.nativeElement)
    this.activeElementId$.subscribe(id => {
      const activeElement = this.elements.find(el => el.id === id)
      this.placeConstructorService.changeElement(id, {
        ...activeElement,
        x: e.dropPoint?.x,
        y: e.dropPoint?.y,
      })
    }).unsubscribe()
  }

}
