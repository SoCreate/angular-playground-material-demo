import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatButtonToggleModule } from '@angular/material';

const COMPONENT_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule
]

@NgModule({
  imports: [
    COMPONENT_MODULES
  ],
  exports: [
    COMPONENT_MODULES
  ]
})
export class MaterialModule { }
