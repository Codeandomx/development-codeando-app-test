import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthSafeService } from '../../services/auth-safe.service';
import { AdminComponent } from './../../components/admin/admin.component';

const routes: Routes = [
	{ path: 'admin', canActivate: [AuthSafeService], component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
  	AdminComponent
  ]
})
export class AdminRoutingModule { }
