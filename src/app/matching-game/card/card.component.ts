import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {timeout} from 'rxjs/operator/timeout';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'matching-game-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179.9deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ]),
    trigger('doneState', [
      state('active', style({
        opacity: '.30',
        filter: 'blur(10px)'
      })),
      state('inactive', style({
        opacity: '1',
        filter: 'none'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]

})
export class CardComponent implements OnInit {
  @Input() value : number;
  @Output() cardSelected = new EventEmitter<CardComponent>();
  @Input() cardMatched: boolean = false;

  public flip: string = 'inactive';
  public done: string = 'inactive';
  public enabled: boolean = true;

  constructor() {}

  toggleFlip(): void {
    if(this.enabled){
      this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
    }
  }

  animationDone($event): void {
    if ($event.fromState == 'inactive') {
     let timeOut = setTimeout(() => {
        this.cardSelected.emit(this);
        clearTimeout(timeOut);
      }, 500);


    }
  }

  ngOnInit() {

  }

  toggleEnabled(): void {
    this.enabled = (this.enabled) ? false : true;
  }

  isCardMatched():boolean {
    return this.cardMatched;
  }

  toggleMatchState(): void {
    this.done = (this.done == 'inactive') ? 'active' : 'inactive';
  }
}
