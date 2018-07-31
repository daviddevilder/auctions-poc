import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatDialogModule} from '@angular/material';

@NgModule({
    imports: [CommonModule, MatButtonModule, MatCardModule, MatDialogModule],
    exports: [CommonModule, MatButtonModule, MatCardModule, MatDialogModule],
})
export class CustomMaterialModule { }
