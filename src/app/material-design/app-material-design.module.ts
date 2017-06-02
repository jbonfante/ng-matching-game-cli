import {
  MdButtonModule, MdButtonToggleModule, MdCardModule, MdCheckboxModule, MdChipsModule, MdDialogModule,
  MdGridListModule, MdIconModule, MdListModule, MdSnackBarModule, MdTabsModule, MdToolbarModule
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdCardModule, MdGridListModule, MdButtonToggleModule, MdSnackBarModule, MdToolbarModule, MdDialogModule, MdChipsModule, MdListModule, MdTabsModule],
  exports: [MdButtonModule, MdCheckboxModule, MdCardModule, MdGridListModule, MdButtonToggleModule, MdSnackBarModule, MdToolbarModule, MdDialogModule, MdChipsModule, MdListModule, MdTabsModule, MdIconModule],
})
export class AppMaterialDesignModule { }
