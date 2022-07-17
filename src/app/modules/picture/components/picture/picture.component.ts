import { Component, Input } from '@angular/core';

import { IPicture } from 'src/app/shared/interfaces/picture.interface';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
})
export class PictureComponent {
  picked = false;

  @Input() picture: IPicture;

  openPicture() {
    this.picked = true;
  }
}
