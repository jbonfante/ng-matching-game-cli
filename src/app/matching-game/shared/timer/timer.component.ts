import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {observable} from 'rxjs/symbol/observable';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

export class TimerComponent implements OnInit, OnDestroy {

  public tick: number;
  private subscription: Subscription;
  private enabled: boolean = true;

  constructor() { }

  ngOnInit() {
    let timer = TimerObservable.create(500, 1000);
    this.subscription = timer.subscribe(
      t =>  this.tick = t,
      err => console.log(err),
      () => console.log('timer complete')
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  stop() {
    this.enabled = false;
    this.unsubscribe();
  }

  reset() {
    this.stop();
    this.enabled = true;
    this.ngOnInit();
  }

  unsubscribe(): void {
      this.subscription.unsubscribe();
  }
}
