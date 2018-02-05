import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitComponent } from './../../components/init/init.component';
import { PrivacidadComponent } from './../../components/privacidad/privacidad.component';
import { CondicionesComponent } from './../../components/condiciones/condiciones.component';
import { FooterComponent } from './../../components/footer/footer.component';

const routes: Routes = [
  { path: '', component: InitComponent },
  { path: 'politica-de-privacidad', component: PrivacidadComponent },
  { path: 'terminos-y-condiciones-de-uso', component: CondicionesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
  	InitComponent,
  	PrivacidadComponent,
  	CondicionesComponent,
    FooterComponent
  ]
})
export class InitRoutingModule { }
