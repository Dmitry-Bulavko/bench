import { Component, OnInit } from "@angular/core";
import { combineLatest } from "rxjs";
import { PlaceConstructorFacadeService } from "../../store/facade.service";
import { AreaElement } from "../../models/area-element.model";

@Component({
    selector: 'bench-header-controls',
    templateUrl: './header-controls.component.html',
    styleUrls: ['./header-controls.component.scss']
})
export class HeaderControlsComponent implements OnInit{
    private activeElement: AreaElement;

    constructor(
        private placeConstructorService: PlaceConstructorFacadeService, 
    ) {}

    ngOnInit(): void {
        combineLatest([
            this.placeConstructorService.activeElement$,
            this.placeConstructorService.areaElements$
        ])
        .subscribe(([elementId, elementsMap]) => {
            this.activeElement = {...elementsMap.get(elementId)}
        })
    }

    rotateElement(deg) {
        if (this.activeElement.id) {
            this.activeElement.rotate += deg;
            this.placeConstructorService.changeElement(this.activeElement.id, this.activeElement);
        }
    }

    deleteElement() {
        if (this.activeElement.id) {
            this.placeConstructorService.deleteElement(this.activeElement.id);
        }
    }
}