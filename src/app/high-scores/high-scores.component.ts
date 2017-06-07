import { Component, OnInit } from '@angular/core';

const HIGHSCORES:Array<any> = [
  {position: 1, name: "Juan B", time: 93, color:'#999999'},
  {position: 2, name: "Juan C", time: 96, color:'#666666'},
  {position: 3, name: "Juan D", time: 102, color:'#999999'},
  {position: 4, name: "Juan E", time: 112, color:'#666666'},
  {position: 5, name: "Juan F", time: 126, color:'#999999'},
  {position: 6, name: "Juan G", time: 169, color:'#666666'},
  {position: 7, name: "Juan H", time: 304, color:'#999999'},
];

@Component({
  selector: 'app-high-scores',
  templateUrl: './high-scores.component.html',
  styleUrls: ['./high-scores.component.css']
})

export class HighScoresComponent implements OnInit {
  public highscores:Array<any> = HIGHSCORES;

  constructor() { }

  ngOnInit() {
  }

}
