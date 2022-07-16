import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './component/main.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
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
    MaterialModule,
    HttpClientModule,
    RouterModule.forChild([{ path: '', component: MainComponent }]),
  ],
  exports: [MainComponent],
})
export class MainModule {}
