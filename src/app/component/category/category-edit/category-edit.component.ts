import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../../service/category/category-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
    selector: 'app-category-edit',
    templateUrl: './category-edit.component.html',
    styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {
    categoryForm: FormGroup = new FormGroup({name: new FormControl()});
    id: number;

    constructor(private categoryService: CategoryService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                ) {
        this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
            this.id = +paramMap.get('id');
            this.getCategory(this.id);
        });
    }


    ngOnInit(): void {
    }

    getCategory(id: number) {
        return this.categoryService.findById(id).subscribe(category => {
            console.log(category);
            this.categoryForm = new FormGroup({
                // @ts-ignore
                name: new FormControl(category.name),
            });
        });
    }

    updateCategory(id: number) {
        const category = this.categoryForm.value;
        this.categoryService.updateCategory(id, category).subscribe(() => {
            alert('Cập nhật thành công');
            this.router.navigate(['/category/list']);
        }, e => {
            console.log(e);
        });
    }

    Delete(id: number) {
        if (confirm('Bạn chắc chắn muốn xóa ?')){
            this.categoryService.deleteCategory(id).subscribe(() => {
                this.router.navigate(['/category/list']);
            }, e => {
                console.log(e);
            });
        }
    }
}
