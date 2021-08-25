import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductListComponent} from '../../component/product/product-list/product-list.component';


@NgModule({
    declarations: [ProductListComponent],
    imports: [
        CommonModule,
        ProductRoutingModule,

    ]
})
export class ProductModule {
}
