import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatButtonToggleModule, MatChipsModule, MatSelectModule, MatCheckboxModule, MatAutocompleteModule, MatInputModule, MatSlideToggleModule } from '@angular/material';

const COMPONENT_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatSelectModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatInputModule,
  MatSlideToggleModule
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
