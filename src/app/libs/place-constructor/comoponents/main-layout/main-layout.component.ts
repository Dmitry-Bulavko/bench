import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith, withLatestFrom } from 'rxjs/operators'
import { EButtonType } from 'src/app/components/button/models/button-type.enum';
import { DEFAULT_LAYER_HEIGHT, DEFAULT_LAYER_WIDTH } from '../../config';
import { PlaceConstructorFacadeService } from '../../store/facade.service';
import { AreaElement } from '../../models/area-element.model';

@Component({
  selector: 'bench-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  layerWidth = new FormControl(DEFAULT_LAYER_WIDTH);
  layerHeight = new FormControl(DEFAULT_LAYER_HEIGHT);
  public areaElements$: Observable<AreaElement[]> = this
    .placeConstructorService
    .areaElements$
    .pipe(
      map(elementsMap => [...elementsMap.values()]),
    );
  public ButtonTypes: typeof EButtonType = EButtonType;
  constructor(
    private placeConstructorService: PlaceConstructorFacadeService
  ) { }

  ngOnInit(): void {
    const test = combineLatest([
      this.layerWidth.valueChanges.pipe(startWith(this.layerWidth.value)),
      this.layerHeight.valueChanges.pipe(startWith(this.layerHeight.value))
    ])
    .subscribe(
      ([width, height]) => {
        this.placeConstructorService.changeLayerSize(width,height)
      }
    )
  }

}
