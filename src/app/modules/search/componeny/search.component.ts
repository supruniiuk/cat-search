import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { IBreed } from 'src/app/shared/interfaces/breed.interface';
import { ICategory } from 'src/app/shared/interfaces/category.interface';
import { IOptions } from 'src/app/shared/interfaces/picture.interface';
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
  @Output() search: EventEmitter<any> = new EventEmitter();

  constructor(private typeService: TypeService) {}

  ngOnInit(): void {
    this.getBreeds();
    this.getCategoties();
  }

  getBreeds() {
    this.typeService.getAllBreeds().subscribe((breeds) => {
      this.breeds = breeds;
    });
  }

  getCategoties() {
    this.typeService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  setSearch() {
    this.search.emit(this.searchSelection);
  }
}
