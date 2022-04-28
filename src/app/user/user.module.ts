import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatCardModule } from '@angular/material/card';
//import { MatButtonModule } from '@angular/material/button';
//import { MatInputModule } from '@angular/material/input';
//import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialExampleModule } from '../material.module';

@NgModule({
  declarations: [UsersComponent, UserComponent, EditUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    //MatCardModule,
    //MatButtonModule,
    //MatInputModule,
    //MatFormFieldModule,
    MaterialExampleModule
  ],
})
export class UserModule {}
