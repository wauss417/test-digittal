import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const importsModulesShared = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
];

@NgModule({
    declarations: [ ],
    imports: [
        ...importsModulesShared
    ],
    exports: [
        ...importsModulesShared
    ]
})
export class SharedModule { }
