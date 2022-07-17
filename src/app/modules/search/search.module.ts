import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { NgModule } from '@angular/core';
import { SearchComponent } from './componeny/search.component';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [SearchComponent],
})
export class SearchModule {}
