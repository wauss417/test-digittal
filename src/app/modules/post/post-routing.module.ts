import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* components */
import {
    ListComponent
} from './components';

const routes: Routes = [
    {
        path: '',
        component: ListComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
