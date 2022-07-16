import { Component, OnInit } from '@angular/core';

import { IPicture } from 'src/app/shared/interfaces/picture.interface';
import { PageEvent } from '@angular/material/paginator';
import { PictureService } from 'src/app/services/picture.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  currentPage: number = 1;
  limit: number = 10;
  pictures: IPicture[];

  constructor(private pictureService: PictureService) {}

  ngOnInit(): void {
    this.getPictures();
  }

  getPictures(): void {
    this.pictureService
      .getAllPictures(this.limit, this.currentPage)
      .subscribe((res) => {
        this.pictures = res;
      });
  }

  handlePage(e: PageEvent) {
    this.currentPage = e.pageIndex + 1;
    this.limit = e.pageSize;
    //this.store.dispatch(fetchArticleList({ articlesList: [] }));
    this.getPictures();
  }
}
