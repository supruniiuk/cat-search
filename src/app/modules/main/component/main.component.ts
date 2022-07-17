import { Component, OnInit } from '@angular/core';

import { IAppState } from 'src/app/state/app.state';
import { IOptions } from 'src/app/shared/interfaces/picture.interface';
import { PageEvent } from '@angular/material/paginator';
import { PictureService } from 'src/app/services/picture.service';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { fetchPictureList } from 'src/app/state/pictures/pictures.actions';
import { selectPictures } from 'src/app/state/pictures/pictures.selectors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  pictures$ = this.store.select(selectPictures);

  currentPage: number = 1;
  limit: number = 10;
  options: IOptions = { breed: '', category: '' };

  subs: Subscription[];

  constructor(
    private pictureService: PictureService,
    private store: Store<IAppState>
  ) {}

  ngOnInit(): void {
    this.getPictures();
  }

  getPictures(): void {
    const pictureSubscription = this.pictureService
      .getAllPictures(this.limit, this.currentPage, this.options)
      .subscribe((res) => {
        this.store.dispatch(fetchPictureList({ picturesList: res }));
      });

    this.subs.push(pictureSubscription);
  }

  handlePage(e: PageEvent) {
    this.currentPage = e.pageIndex + 1;
    this.limit = e.pageSize;
    this.store.dispatch(fetchPictureList({ picturesList: [] }));
    this.getPictures();
  }

  setSearch(event: IOptions) {
    this.options = event;
    this.getPictures();
  }

  onDestroy(): void {
    this.subs.forEach((subscription) => subscription.unsubscribe());
  }
}
