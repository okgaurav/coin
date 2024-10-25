import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormField} from "@angular/material/form-field";

const modules:any =[
  CommonModule,

  MatFormField
];

@NgModule({
  imports: [modules],
  exports: [modules]
})
export class MaterialModule { }
