import { Component, OnInit } from '@angular/core';
declare var Rellax : any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var rellax = new Rellax('.rellax');
  }

}
