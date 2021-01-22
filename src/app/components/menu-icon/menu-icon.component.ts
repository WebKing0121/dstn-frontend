import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-icon',
  templateUrl: './menu-icon.component.html',
  styleUrls: ['./menu-icon.component.scss']
})
export class MenuIconComponent implements OnInit {
  icon: any;

  constructor() {
  }

  ngOnInit(): void {
    this.icon = document.getElementById('sideNavIcon')
    console.log('hamberger: ', this.icon)
  }

  showMenu() {
    this.icon.classList.toggle("change");
  }
}
