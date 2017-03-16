import {Component} from "@angular/core";
import {GridOptions} from "ag-grid";
import {GridCellComponent} from "../grid-cell-component/grid-cell-component.component";

@Component({
    selector: 'app-data-grid',
    templateUrl: './data-grid.component.html'
})
export class MyGridApplicationComponent {
    private gridOptions: GridOptions;

    constructor() {
        this.gridOptions = {enableFilter: true};
        this.gridOptions.columnDefs = [
            {
                headerName: "ID",
                field: "id",
                filter: 'number',
                width: 100
            },
            {
                headerName: "Name",
                field: "name",
                filter: 'text',
                cellRendererFramework: GridCellComponent,
                width: 100
            },
            {
                headerName: "Technology",
                field: "tech",
                filter: 'text',
                cellRendererFramework: GridCellComponent,
                width: 100
            },

        ];
        this.gridOptions.rowData = [
           {id: 123, name: 'Ankita',tech:'HTML',},
            {id: 124, name: 'Dinesh',tech:'Angular',},
            {id: 125, name: 'Indu',tech:'HTML',},
             {id: 126, name: 'Madhu',tech:'Angular',},
             {id: 127, name: 'Prakhathi',tech:'Angular',}
        ]
    }
}