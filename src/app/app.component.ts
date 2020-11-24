import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'dstncert-frontend';
  topPos = 50;
  scrollPosition = 0;

  @HostListener('window:scroll')
  checkScroll() {
    this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }

  ngOnInit() {
  }
}

