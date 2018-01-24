import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatButtonToggleModule, MatChipsModule, MatSelectModule, MatCheckboxModule } from '@angular/material';

const COMPONENT_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatSelectModule,
  MatCheckboxModule
];

@NgModule({
  imports: [
    COMPONENT_MODULES
  ],
  exports: [
    COMPONENT_MODULES
  ]
})
export class MaterialModule { }
