import { CommonModule } from '@angular/common';
import { LoaderComponent } from './component/loader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [LoaderComponent],
})
export class LoaderModule {}
