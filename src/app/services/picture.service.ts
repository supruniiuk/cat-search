import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root',
})
export class PictureService {
  route = 'images/search';
  constructor(private requestService: RequestService) {}

  getAllPictures(limit: number, page: number): Observable<any> {
    return this.requestService.get(`${this.route}?limit=${limit}&page=${page}&order=DESC`);
  }
}
