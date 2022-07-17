import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { NgModule } from '@angular/core';
import { PictureComponent } from './components/picture/picture.component';
import { PictureItemComponent } from './components/picture-item/picture-item.component';
import { PictureListComponent } from './components/picture-list/picture-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PictureComponent, PictureListComponent, PictureItemComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [PictureComponent, PictureListComponent],
})
export class PictureModule {}
