import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VehicleListComponent} from "./vehicles-list/vehicle-list.component";
import {RouterModule} from "@angular/router";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbSelectModule
} from "@nebular/theme";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {VehiclesFormComponent} from "./vehicles-form/vehicles-form.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [VehicleListComponent, VehiclesFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    NbSelectModule,
    NbCardModule,
    NgxDatatableModule,
    NbActionsModule,
    NbInputModule,
    NbButtonModule,
    ReactiveFormsModule,
    NbIconModule
  ]
})
export class VehiclesModule {
}
