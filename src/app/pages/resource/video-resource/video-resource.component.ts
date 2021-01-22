import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-video-resource',
  templateUrl: './video-resource.component.html',
  styleUrls: ['./video-resource.component.scss']
})
export class VideoResourceComponent implements OnInit {
  public demo1TabIndex = 0;

  constructor(
    private router: Router,
    private titleService: Title
  ) {
  }

  ngOnInit(): void {
    if (window.location.pathname === '/resource/videos/deep-dive') {
      this.demo1TabIndex = 1
      this.setDocTitle('Deep Dive')
    } else if (window.location.pathname === '/resource/videos/what-the-hack') {
      this.demo1TabIndex = 2
      this.setDocTitle('What the hack')
    } else if (window.location.pathname === '/resource/videos/cybersecurity-fireside') {
      this.demo1TabIndex = 3
      this.setDocTitle('Cybersecurity Fireside')
    } else {
      this.demo1TabIndex = 0
      this.setDocTitle('Cissp Mindmap')
    }
  }

  navigate (e) {
    switch (e.index) {
      case 1:
        this.router.navigate(['resource/videos', 'deep-dive'])
        this.setDocTitle('Deep Dive')
        break
      case 2:
        this.router.navigate(['resource/videos', 'what-the-hack'])
        this.setDocTitle('What the hack')
        break
      case 3:
        this.router.navigate(['resource/videos', 'cybersecurity-fireside'])
        this.setDocTitle('Cybersecurity Fireside')
        break
      default:
        this.router.navigate(['resource/videos', 'cissp-mindmap'])
        this.setDocTitle('Cissp Mindmap')
        break
    }
  }

  setDocTitle(title: string) {
    this.titleService.setTitle(title);
  }
}
