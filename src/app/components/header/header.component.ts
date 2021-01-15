import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() scrollPosition: number;

  constructor(private titleService: Title) {}

  ngOnInit() {
  }

  setDocTitle(title: string) {
    this.titleService.setTitle(title);
  }
}
