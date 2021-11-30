import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

/* Shared module */
import { SharedModule } from '@sharedModule';
// module routing
import { PostRoutingModule } from './post-routing.module';
// Module component
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    SharedModule,
    PostRoutingModule,
    MatCardModule
  ]
})
export class PostModule { }
