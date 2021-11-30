import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
/* Shared module */
import { SharedModule } from '@sharedModule';
// module routing
import { PostRoutingModule } from './post-routing.module';
// Module component
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { CreateComponent } from './components/create/create.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
    declarations: [
        ListComponent,
        EditComponent,
        CreateComponent,
        DetailsComponent
    ],
    imports: [
        SharedModule,
        PostRoutingModule,
        MatCardModule
    ]
})
export class PostModule { }
