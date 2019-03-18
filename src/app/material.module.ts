// tslint:disable-next-line:max-line-length
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatGridListModule, MatInputModule, MatToolbarModule, MatTableModule, MatPaginatorModule, MatDialog, MatDialogModule, MatFormFieldModule, MatSortModule, MatIconModule} from '@angular/material';

import { NgModule } from '@angular/core';
import { LoginComponent } from './componentes/login/login.component';
import { AdminComponent } from './componentes/admin/admin.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  // tslint:disable-next-line:max-line-length
  imports: [RouterModule.forRoot(routes), MatButtonModule, MatCheckboxModule, MatCardModule, MatGridListModule, MatInputModule, MatToolbarModule, MatTableModule, MatPaginatorModule, MatDialogModule, MatFormFieldModule, MatSortModule, FlexLayoutModule, MatIconModule, FormsModule, ReactiveFormsModule],
  // tslint:disable-next-line:max-line-length
  exports: [RouterModule, MatButtonModule, MatCheckboxModule, AdminComponent, LoginComponent, MatCardModule, MatGridListModule, MatInputModule, MatToolbarModule, MatTableModule, MatPaginatorModule, MatDialogModule, MatFormFieldModule, MatSortModule, FlexLayoutModule, MatIconModule, FormsModule, ReactiveFormsModule],
  declarations: [LoginComponent, AdminComponent, AdminComponent],
})
export class Material { }
