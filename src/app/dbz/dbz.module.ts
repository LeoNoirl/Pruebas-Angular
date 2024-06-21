import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { MainPageComponent } from './pages/main-pages.componets';



@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class DbzModule { }
