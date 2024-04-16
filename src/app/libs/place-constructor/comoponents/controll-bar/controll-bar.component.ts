import { Component, Input, OnInit } from '@angular/core';
import { PlaceConstructorFacadeService } from '../../store/facade.service';
import { IConstructorControll } from '../controll/controll.model';
import { AreaElements } from '../../elemets-lib';
import { elementsGroups } from '../../elemets-lib/elementsGroups';
import { group } from 'console';

@Component({
  selector: 'bench-controll-bar',
  templateUrl: './controll-bar.component.html',
  styleUrls: ['./controll-bar.component.scss']
})
export class ControllBarComponent implements OnInit {

  // @Input() controlls: IConstructorControll[] = [
  //   {
  //     icon: '',
  //     label: 'Square'
  //   },
  //   {
  //     icon: '',
  //     label: 'Line'
  //   },
  //   {
  //     icon: `<img src="'../../../../../assets/svg/round-table-svgrepo-com.svg"/>`,
  //     label: 'Table'
  //   }
  // ]
  controlls = Object.entries(AreaElements).map(
    ([key, value]) => {
      const inst = new value(null);
      return {
        icon: inst.getIcon(),
        label: inst.type,
        group: inst?.group || 'Default'
      }
    }
  );

  public controlGroups = elementsGroups;

  public activeControl$ = this.placeConstructorService.activeControl$;

  constructor(
    private placeConstructorService: PlaceConstructorFacadeService
  ) { }

  ngOnInit(): void {
    console.log(
      Object.entries(AreaElements).forEach((
        [key, value]
      ) => {
        const inst = new value(null);
        const group = this.controlGroups.find(group => group.type === inst.group)
        if (group) {
          group.elements.push(
            {
              icon: inst.getIcon(),
              label: inst.type,
            }
          )
        }
      })
    );
  }

  toggleGroup(event) {
    event.target
      .closest('.c-controll-bar__group-list')
      .classList
      .toggle('c-controll-bar__group-list--collapsed')
  }

}
