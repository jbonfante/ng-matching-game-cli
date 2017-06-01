import {
  MdButtonModule, MdButtonToggleModule, MdCardModule, MdCheckboxModule, MdChipsModule, MdDialogModule,
  MdGridListModule, MdListModule, MdSnackBarModule, MdToolbarModule
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdCardModule, MdGridListModule, MdButtonToggleModule, MdSnackBarModule, MdToolbarModule, MdDialogModule, MdChipsModule, MdListModule],
  exports: [MdButtonModule, MdCheckboxModule, MdCardModule, MdGridListModule, MdButtonToggleModule, MdSnackBarModule, MdToolbarModule, MdDialogModule, MdChipsModule, MdListModule],
})
export class AppMaterialDesignModule { }
