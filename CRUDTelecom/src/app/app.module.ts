import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'; //importar modulo Router
import {NgxPaginationModule} from 'ngx-pagination'; // <-- importar modulo NgxPagination
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';

const appRoutes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewComponent, pathMatch: 'full' },
  { path: '',   redirectTo: '/view', pathMatch: 'full'},
  { path: 'edit/:id', component: EditComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule, // include it in your app module
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }