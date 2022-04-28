import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { UsersComponent } from './user/users/users.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'edit/user', component: EditUserComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
