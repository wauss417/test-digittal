import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* components */
import {
    ListComponent,
    EditComponent,
    DetailsComponent,
    CreateComponent
} from './components';

const routes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: 'create',
        component: CreateComponent
    },
    {
        path: 'edit/:id',
        component: EditComponent
    },
    {
        path: 'detail/:id',
        component: DetailsComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
