import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-cell-component',
  templateUrl: './grid-cell-component.component.html',
  styleUrls: ['./grid-cell-component.component.css']
})
export class GridCellComponent {
    private params: any;

    agInit(params: any): void {
        this.params = params;
    }
}
