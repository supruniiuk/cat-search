import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  exports: [MatToolbarModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule],
})
export class 
MaterialModule {}
