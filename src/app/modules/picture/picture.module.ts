import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { NgModule } from '@angular/core';
import { PictureComponent } from './components/picture/picture.component';
import { PictureListComponent } from './components/picture-list/picture-list.component';

@NgModule({
  declarations: [PictureComponent, PictureListComponent],
  imports: [CommonModule, MaterialModule],
  exports: [PictureComponent, PictureListComponent],
})
export class PictureModule {}
