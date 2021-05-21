import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TaskComponent} from './task/task.component';

const routes: Routes = [
{path: 'tasks', component:TaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
