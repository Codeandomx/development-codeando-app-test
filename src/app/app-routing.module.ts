import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
  	CommonModule,
  	RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [PageNotFoundComponent]
})
export class AppRoutingModule { }
