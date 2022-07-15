import { CommonModule } from '@angular/common';
import { MainComponent } from './component/main.component';
import { NgModule } from '@angular/core';
import { PictureModule } from '../picture/picture.module';
import { RouterModule } from '@angular/router';
import { SearchModule } from '../search/search.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    SearchModule,
    PictureModule,
    RouterModule.forChild([{ path: '', component: MainComponent }]),
  ],
  exports: [MainComponent],
})
export class MainModule {}
