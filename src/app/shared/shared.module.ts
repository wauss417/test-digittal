import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Material
import { MatButtonModule } from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field';

const importsModulesShared = [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
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
