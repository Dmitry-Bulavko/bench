import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ISelect, ISelectOptions } from './select.model';

@Component({
  selector: 'bench-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input()
  set data(inputData: ISelect) {
    console.log('work')
    this._data = inputData;
    this.options = Object.keys(inputData.options) || [];
    this.optionsObject = inputData.options || {};
    this.icon = inputData.icon || '';
    this.value = inputData.value;
  };

  public _data: ISelect | undefined;
  public options: string[] = [];
  public icon: string = '';
  public isDropdownOpen: boolean = false;
  public optionsObject: ISelectOptions = {} as ISelectOptions;
  public value: string = '';
  constructor(private eRef: ElementRef) { }

  @HostListener('document:click', ['$event'])
  clickout(event: Event): void {
    if(
      !this.eRef.nativeElement.contains(event.target) 
      && this.isDropdownOpen
    ) {
      this.isDropdownOpen = false;
    }
  }

  public toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  public setValue(option: string) {
    this.value = option;
    this.toggleDropdown();
  }
}
