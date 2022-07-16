import { Component, Input, OnInit } from '@angular/core';

import { IPicture } from 'src/app/shared/interfaces/picture.interface';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  @Input() picture: IPicture;
  constructor() { }

  ngOnInit(): void {
  }

}
