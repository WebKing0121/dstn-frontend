import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('drawer') drawer: MatDrawer;
  @Input() scrollPosition: number;
  showFiller = false;
  icon: any;
  navItems = [
    {
      url: 'home',
      value: 'Home'
    },
    {
      url: 'courses',
      value: 'Courses'
    },
    {
      url: 'features',
      value: 'Intelligent System'
    },
    {
      url: 'our-team',
      value: 'Our Team'
    }
  ];
  opened: boolean

  constructor(
    private router: Router,
    private titleService: Title
  ) {
    router.events.subscribe((val) => {
      console.log('path: ', window.location.pathname)
    })
    // console.log('ddd: ', this.drawer)
    // this.drawer.openedChange.subscribe(val => {
    //   console.log('event: ', val)
    // })
  }

  ngOnInit() {
    this.icon = document.getElementById('sideNavIcon')
    console.log('drawer: ', this.drawer)
  }

  setDocTitle(title: string) {
    this.titleService.setTitle(title);
  }
}
