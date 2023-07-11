import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilRoutingModule } from './accueil-routing.module';
import { OuvrageComponent } from './ouvrages/ouvrage/ouvrage.component';
import { AdminComponent } from './admin/admin.component';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    OuvrageComponent,
    AdminComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    AccueilRoutingModule
  ]
})
export class AccueilModule { }
