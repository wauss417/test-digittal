/** Angular */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

/** Libraries */

/** App components */
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


// Services
const services = [ ];

/**
 * navigation components
 */

import {
    FooterComponent,
    HeaderComponent
} from './components';

const componentsNavigation = [
    FooterComponent,
    HeaderComponent
];

/**
 * shared module
 */
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [
        AppComponent,
        ...componentsNavigation
    ],
    imports: [
        /* Ng service that has to be instaced on Root module */
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        /* App routing */
        AppRoutingModule,
        /* Shared module */
        SharedModule,
    ],
    exports: [
        ...componentsNavigation
    ],
    providers: [
        ...services
    ],
    bootstrap: [AppComponent]
})


export class AppModule { }
