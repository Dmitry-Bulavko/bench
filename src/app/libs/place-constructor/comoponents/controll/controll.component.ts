import { Component, HostListener, Input, OnInit } from '@angular/core';
import { PlaceConstructorFacadeService } from '../../store/facade.service';
import { IConstructorControll } from './controll.model';

@Component({
  selector: 'bench-controll',
  templateUrl: './controll.component.html',
  styleUrls: ['./controll.component.scss']
})
export class ControllComponent implements OnInit {
  constructor(
    private placeConstructorService: PlaceConstructorFacadeService
  ) {}

  @Input() data: IConstructorControll;

  ngOnInit(): void {
  }

  @HostListener('click', ['$event'])
  onClick() {
    this.placeConstructorService.setActiveControl(this.data.label)
    // this.placeConstructorService.addElement({
    //   x: Math.random()*300,
    //   y: Math.random()*300,
    //   width: 100,
    //   height: 100,
    //   fill: 'red'
    // })
  }
}
