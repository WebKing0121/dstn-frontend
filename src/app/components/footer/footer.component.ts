import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  width: number = 1240;
  constructor(private titleService: Title) {}

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = event.target.innerWidth;
  }

  ngOnInit(): void {
  }

  setDocTitle(title: string) {
    this.titleService.setTitle(title);
  }
}
