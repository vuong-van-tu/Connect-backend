import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryListComponent} from '../../component/category/category-list/category-list.component';
import {CategoryEditComponent} from '../../component/category/category-edit/category-edit.component';
import {CategoryCreateComponent} from '../../component/category/category-create/category-create.component';

const routes: Routes = [
    {
        path: 'list',
        component: CategoryListComponent
    },
    {
        path: 'edit/:id',
        component: CategoryEditComponent
    },
    {
        path: 'create',
        component: CategoryCreateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoryRoutingModule {
}
