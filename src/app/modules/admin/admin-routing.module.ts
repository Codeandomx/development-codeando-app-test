import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AuthSafeService } from '../../services/auth-safe.service';
import { AdminComponent } from './../../components/admin/admin.component';
import { AdminMenuComponent } from './../../components/admin-menu/admin-menu.component';
import { AdminMainComponent } from './../../components/admin-main/admin-main.component';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

const routes: Routes = [{
	path: 'admin',
	canActivate: [AuthSafeService],
	component: AdminComponent,
	children: [{
		path: '',
		component: AdminMainComponent
	}]
}];

@NgModule({
  imports: [
  	CommonModule,
    FormsModule,
  	RouterModule.forChild(routes),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  exports: [RouterModule],
  declarations: [
  	AdminComponent,
  	AdminMenuComponent,
  	AdminMainComponent
  ]
})
export class AdminRoutingModule { }
