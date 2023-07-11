import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OuvrageComponent } from './ouvrages/ouvrage/ouvrage.component';

const routes: Routes = [
  {path: 'ouvrage', component: OuvrageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccueilRoutingModule { }
