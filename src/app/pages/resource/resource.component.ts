import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {
  status:any;
  public demo1TabIndex = 0;

  constructor(
    private router: Router,
    private titleService: Title
  ) {
    router.events.subscribe((val) => {
      if (window.location.pathname === '/resource/apps') {
        this.demo1TabIndex = 1
        this.setDocTitle('Apps')
      } else {
        this.demo1TabIndex = 0
      }
    });
  }

  ngOnInit(): void {
    if (window.location.pathname === '/resource/apps') {
      this.demo1TabIndex = 1
      this.setDocTitle('Apps')
    } else {
      this.demo1TabIndex = 0
      this.setDocTitle('Videos')
    }
  }

  navigate (e) {
    // localStorage.setItem('resource-page-idx', e.index.toString());
    if (e.index == 0) {
      this.router.navigate(['resource', 'videos']);
    } else {
      this.router.navigate(['resource', 'apps']);
    }
  }

  setDocTitle(title: string) {
    this.titleService.setTitle(title);
  }
}
