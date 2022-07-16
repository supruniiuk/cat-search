import { IOptions, IPicture } from '../shared/interfaces/picture.interface';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root',
})
export class PictureService {
  route = 'images/search';
  constructor(private requestService: RequestService) {}

  getAllPictures(
    limit: number,
    page: number,
    options: IOptions
  ): Observable<IPicture[]> {
    return this.requestService.get<IPicture[]>(
      `${this.route}?limit=${limit}&page=${page}&breed_ids=${options.breed}&category_ids=${options.category}&order=DESC`
    );
  }
}
