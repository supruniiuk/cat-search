import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { IBreed } from 'src/app/shared/interfaces/breed.interface';
import { ICategory } from 'src/app/shared/interfaces/category.interface';
import { IOptions } from 'src/app/shared/interfaces/picture.interface';
import { Subscription } from 'rxjs';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  breeds: IBreed[];
  categories: ICategory[];

  searchForm: FormGroup;

  subs: Subscription[] = [];
  @Output() search: EventEmitter<any> = new EventEmitter();

  constructor(private typeService: TypeService) {}

  ngOnInit(): void {
    this.initForm();
    this.getBreeds();
    this.getCategoties();
  }

  initForm() {
    this.searchForm = new FormGroup({
      breed: new FormControl(''),
      category: new FormControl(''),
    });
  }

  getBreeds() {
    const breedSubscription = this.typeService
      .getAllBreeds()
      .subscribe((breeds) => {
        this.breeds = breeds;
      });

    this.subs.push(breedSubscription);
  }

  getCategoties() {
    const categorySubscription = this.typeService
      .getAllCategories()
      .subscribe((categories) => {
        this.categories = categories;
      });

    this.subs.push(categorySubscription);
  }

  setBreed() {
    this.searchForm.patchValue({
      category: '',
    });
    this.search.emit(this.searchForm.value);
  }

  setCategory() {
    this.searchForm.patchValue({
      breed: '',
    });
    this.search.emit(this.searchForm.value);
  }

  onDestroy(): void {
    this.subs.forEach((subscription) => subscription.unsubscribe());
  }
}
