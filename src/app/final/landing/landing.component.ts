import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface Startup {
  color: string;
  cols: number;
  rows: number;
  text: string;
  url: string;
  id:string;

}
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent {
  shown_sports_tiles: Startup[] = [
    { text: 'Aquatics', url: 'Aquatics',  cols: 2, rows: 1, color: '../../assets/bg.png',id:'', },
    { text: 'Athletics', url: 'Athletics', cols: 2, rows: 1, color: '../../assets/bg.png',id:'' },
    { text: 'Badminton',url: 'Badminton', cols: 2, rows: 1, color: '../../assets/bg.png',id:'' },
    { text: 'Basketball',url: 'Basketball', cols: 2, rows: 1, color: "../../assets/bg.png",id:''},
    { text: 'Board Games', url: 'board_games', cols: 2, rows: 1, color: "../../assets/bg.png",id:'' },
    { text: 'Cricket', url: 'Cricket', cols: 2, rows: 1, color: '../../assets/bg.png',id:'' },
    { text: 'Football',url: 'Football', cols: 2, rows: 1, color: "../../assets/bg.png",id:'' },
    { text: 'Hockey',url: 'Hockey', cols: 2, rows: 1, color: "../../assets/bg.png",id:'' },
  ];
}
