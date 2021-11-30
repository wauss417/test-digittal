import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


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
  ]
})
export class PostModule { }
