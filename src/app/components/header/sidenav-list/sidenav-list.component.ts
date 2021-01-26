import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Input()navItems: [];

  constructor(
    private titleService: Title
  ) {
  }

  ngOnInit() {
  }

  setDocTitle(title: string) {
    this.titleService.setTitle(title);
  }
}
