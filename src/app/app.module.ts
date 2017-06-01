import 'hammerjs';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HighScoresComponent} from './high-scores/high-scores.component';
import {MatchingGameComponent} from './matching-game/matching-game.component';
import {AppRoutingModule} from './app-routing.module';
import {TimerComponent} from './matching-game/shared/timer/timer.component';
import {SecondsToTimePipe} from './seconds-to-time.pipe';
import {AppMaterialDesignModule} from './material-design/app-material-design.module';
import {CardComponent} from './matching-game/card/card.component';
import { DialogComponent } from './matching-game/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HighScoresComponent,
    MatchingGameComponent,
    SecondsToTimePipe,
    TimerComponent,
    CardComponent,
    DialogComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppMaterialDesignModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
