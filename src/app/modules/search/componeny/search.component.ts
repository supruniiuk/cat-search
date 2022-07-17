import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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

  searchSelection: IOptions = {
    breed: '',
    category: '',
  };

  subs: Subscription[] = [];
  @Output() search: EventEmitter<any> = new EventEmitter();

  constructor(private typeService: TypeService) {}

  ngOnInit(): void {
    this.getBreeds();
    this.getCategoties();
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
    this.searchSelection.category = '';
    this.search.emit(this.searchSelection);
  }

  setCategory() {
    this.searchSelection.breed = '';
    this.search.emit(this.searchSelection);
  }

  onDestroy(): void {
    this.subs.forEach((subscription) => subscription.unsubscribe());
  }
}
