import { Injectable } from '@angular/core';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  route = 'images/search'
  constructor(private requestService: RequestService) { }

  getAllPictures() {
    return this.requestService.get(this.route)
  }
}
