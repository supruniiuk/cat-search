import { Injectable } from '@angular/core';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root',
})
export class TypeService {
  constructor(private requestService: RequestService) {}

  getAllBreeds() {
    return this.requestService.get('breeds');
  }

  getAllCategories() {
    return this.requestService.get('categories');
  }
}
