import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoaderModule } from 'src/app/shared/components/loader/loader.module';
import { MainComponent } from './component/main.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { NgModule } from '@angular/core';
import { PictureItemComponent } from '../picture/components/picture-item/picture-item.component';
import { PictureModule } from '../picture/picture.module';
import { RouterModule } from '@angular/router';
import { SearchModule } from '../search/search.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    SearchModule,
    PictureModule,
    MaterialModule,
    HttpClientModule,
    LoaderModule,
    RouterModule.forChild([{ path: '', component: MainComponent }]),
  ],
  exports: [MainComponent],
})
export class MainModule {}
