import {Component, OnInit, ViewChild} from '@angular/core';
import { Location } from '@angular/common';
import {TimerComponent} from './shared/timer/timer.component';
import {CardComponent} from './card/card.component';
import {Observable} from 'rxjs/Observable';
import {MdDialog, MdSnackBar} from '@angular/material';
import {DialogComponent} from './dialog/dialog.component';


@Component({
  selector: 'app-matching-game',
  templateUrl: './matching-game.component.html',
  styleUrls: ['./matching-game.component.css']
})
export class MatchingGameComponent implements OnInit {

  @ViewChild(TimerComponent)
  private timer: TimerComponent;

  private card_count: number = 12;
  private  cards: Array<number>;
  private selectedCards: Array<any>;
  private card_matches: number = 0;

  private data: Observable<Array<number>>;

  constructor(private location: Location, public snackBar: MdSnackBar, public dialog: MdDialog) {

    this.cards = this.setupCards();
  }

  setupCards(): Array<number> {
    let baseCardValues: Array<number> = Array.from(Array(this.card_count).keys());
    let duplicateAndMergeValue: Array<number> = [...baseCardValues, ...baseCardValues];

    return this.shuffleArray([...duplicateAndMergeValue]);

  }

  ngOnInit() {
    this.selectedCards = [];
  }

  goBack(): void {
    this.location.back();
  }

  newGame(): void {
    location.reload();
  }

  cardClicked(card:CardComponent): void {
    card.toggleEnabled();
    console.log(card.value);
    this.selectedCards.push(card);
    if (this.selectedCards.length == 2) {
      this.checkMatch();

    }
  }

  checkMatch(): void {
    let [a,b] = this.selectedCards.slice(-2);

    if(a.value == b.value) {
      this.addMatch();
      a.cardMatched = b.cardMatched = true;
      [a,b].map((c) => c.toggleMatchState());
    }
    else {
      this.clear();
    }
  }

  clear(): void {
    this.showSnackBar('Not a match!');
    this.selectedCards.map((card) =>
      {
        card.enabled = true;
        card.toggleFlip();
      }
    );
    this.selectedCards = [];
  }
  isSelected(card):boolean {
    return this.selectedCards.includes(card)
  }

  private addMatch():void {
    this.card_matches += 1;
    this.selectedCards = [];
    this.showSnackBar("It's a Match!");


    if(this.card_matches == this.card_count) this.endGame();
  }

  private showSnackBar(message):void {
    this.snackBar.open(message, null,{
      duration: 1000,
    });
  }

  private endGame():void {
    this.timer.stop();
    let data = {time: this.timer.tick};
    this.dialog.open(DialogComponent, {data: data});
  }

  /**
   * Randomize array element order in-place.
   * Using Durstenfeld shuffle algorithm.
   */
  shuffleArray(array: Array<any> ): Array<any> {
    for ( let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

}
