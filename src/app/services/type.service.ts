import { IBreed } from '../shared/interfaces/breed.interface';
import { ICategory } from '../shared/interfaces/category.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root',
})
export class TypeService {
  constructor(private requestService: RequestService) {}

  getAllBreeds(): Observable<IBreed[]> {
    return this.requestService.get('breeds');
  }

  getAllCategories(): Observable<ICategory[]>  {
    return this.requestService.get('categories');
  }
}
