import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { CategoryService } from 'src/app/service/category/category-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss']
})

export class CategoryCreateComponent implements OnInit {
  form: any = {};
  categoryForm: FormGroup = new FormGroup({
    name: new FormControl(),
  });

  constructor(private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit() {
  }

  submit() {
    const category = {
      id: '',
      name: this.form.name,
    };
    this.categoryService.saveCategory(category).subscribe(() => {
      this.categoryForm.reset();
      console.log(category);
      alert('Tạo thành công');
      this.router.navigate(['/category/list']);
    }, e => {
      console.log(e);
    });
  }

}
