import { Component, Input, OnInit } from '@angular/core';

import { IPicture } from '../../../../shared/interfaces/picture.interface';

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.scss'],
})
export class PictureListComponent implements OnInit {
  
  @Input() pictures: IPicture[] = [];

  constructor() {}

  ngOnInit(): void {}
}
