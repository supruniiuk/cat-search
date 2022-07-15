import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatToolbarModule, MatIconModule],
  exports: [MatToolbarModule, MatIconModule],
})
export class MaterialModule {}
