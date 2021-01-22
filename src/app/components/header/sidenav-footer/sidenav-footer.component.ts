import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sidenav-footer',
  templateUrl: './sidenav-footer.component.html',
  styleUrls: ['./sidenav-footer.component.scss']
})
export class SidenavFooterComponent implements OnInit {

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
