import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { NgModule } from '@angular/core';
import { SearchComponent } from './componeny/search.component';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, MaterialModule, FormsModule],
  exports: [SearchComponent],
})
export class SearchModule {}
