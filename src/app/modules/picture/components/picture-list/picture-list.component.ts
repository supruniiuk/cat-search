import { Component, Input, OnInit } from '@angular/core';

import { IPicture } from '../../../../shared/interfaces/picture.interface';

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.scss'],
})
export class PictureListComponent {
  breakpoint: number = 5;

  widthGrid: { [field: string]: number } = {
    '768': 2,
    '1200': 3,
    '1550': 4,
  };

  @Input() pictures: ReadonlyArray<IPicture> | null = [];

  onResize(event: UIEvent) {
    const w = event.target as Window;
    this.breakpoint = this.setGrid(w);
  }

  setGrid(w: Window = window): number {
    for (let width in this.widthGrid) {
      if (w.innerWidth < +width) {
        return this.widthGrid[width];
      }
    }
    return 5;
  }
}
