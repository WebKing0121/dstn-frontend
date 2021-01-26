import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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
  opened: boolean;

  constructor(
    private router: Router,
    private titleService: Title
  ) {
    
  }

  ngOnInit() {
    this.icon = document.getElementById('sideNavIcon')
  }

  setDocTitle(title: string) {
    this.titleService.setTitle(title);
  }

  hideSideNav() {
    this.icon.classList.toggle("change");
  }
}
