import { Component, Input } from '@angular/core';

import { IPicture } from 'src/app/shared/interfaces/picture.interface';

@Component({
  selector: 'app-picture-item',
  templateUrl: './picture-item.component.html',
  styleUrls: ['./picture-item.component.scss'],
})
export class PictureItemComponent {
  @Input() picture: IPicture;
}
