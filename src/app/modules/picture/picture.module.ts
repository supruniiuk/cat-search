import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PictureComponent } from './component/picture.component';

@NgModule({
  declarations: [PictureComponent],
  imports: [CommonModule],
  exports: [PictureComponent],
})
export class PictureModule {}
