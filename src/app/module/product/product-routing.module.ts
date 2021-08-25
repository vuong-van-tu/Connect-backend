import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from '../../component/product/product-list/product-list.component';

const routes: Routes = [{
    path: 'list',
    component: ProductListComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule {
}
