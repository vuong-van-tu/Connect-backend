import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoryRoutingModule} from './category-routing.module';
import {CategoryListComponent} from '../../component/category/category-list/category-list.component';
import {CategoryCreateComponent} from '../../component/category/category-create/category-create.component';
import {CategoryEditComponent} from '../../component/category/category-edit/category-edit.component';
import {MatTableModule} from "@angular/material/table";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [CategoryListComponent, CategoryCreateComponent, CategoryEditComponent],
    imports: [
        CommonModule,
        CategoryRoutingModule,
        MatTableModule,
        ReactiveFormsModule,
        MatCardModule,
        FormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
    ]
})
export class CategoryModule {
}
