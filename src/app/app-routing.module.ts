import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AutosComponent } from './views/autos/autos.component';
import { HogarComponent } from './views/hogar/hogar.component';
import { SaludComponent } from './views/salud/salud.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  }, {
    component: HomeComponent,
    path: 'home',
  }, {
    component: AutosComponent,
    path: 'autos',
  }, {
    component: HogarComponent,
    path: 'hogar',
  }, {
    component: SaludComponent,
    path: 'salud',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
