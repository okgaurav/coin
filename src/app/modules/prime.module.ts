import { SidebarModule } from 'primeng/sidebar';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService,ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
const modules = [
  CommonModule,
  SidebarModule,
  ButtonModule
];
@NgModule({
  imports: [modules],
  exports: [modules],
  providers:[MessageService,ConfirmationService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PrimeModule { }
