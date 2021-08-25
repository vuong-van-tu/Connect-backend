import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';

import {HomeComponent} from './pages/home/home.component';
import {GettingStartedComponent} from './pages/gettingstarted/gettingstarted.component';

import {HttpClientModule} from '@angular/common/http';
import {NgxAudioPlayerModule} from 'projects/ngx-audio-player/src/public_api';
import {MatButtonModule} from '@angular/material/button';

import {NavBarModule} from './shared/navbar';
import {FooterModule} from './shared/footer';
import {LoginFormComponent} from './component/login-form/login-form.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


export const appRoutes: Routes = [
    {path: '', component: HomeComponent, data: {title: 'Home'}},
    {
        path: 'guide/getting-started',
        component: GettingStartedComponent,
        data: {title: 'Getting Started'}
    }, {
        path: 'product',
        loadChildren: () => import ('./module/product/product.module').then(module => module.ProductModule)
    }, {
        path: 'category',
        loadChildren: () => import ('./module/category/category.module').then(module => module.CategoryModule)
    },
];

@NgModule({
    declarations: [AppComponent, HomeComponent, GettingStartedComponent, LoginFormComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatRadioModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatInputModule,
        BrowserAnimationsModule,
        NavBarModule, FooterModule,
        NgxAudioPlayerModule,
        RouterModule.forRoot(appRoutes, {useHash: false}), FormsModule, MatFormFieldModule, ReactiveFormsModule, MatTableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
