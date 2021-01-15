import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deep-dive-tab',
  templateUrl: './deep-dive-tab.component.html',
  styleUrls: ['./deep-dive-tab.component.scss']
})
export class DeepDiveTabComponent implements OnInit {
  items=[
    { title: 'Stored XSS (Cross-site Scripting)', url: 'ABwS2MIxFPQ' },
    { title: 'Reflected XSS (Cross-site Scripting)', url: 'yJSnggHSH1U' },
    { title: 'What is the TCB', url: 'Ik468MeACC8' },
    { title: 'Protecting passwords with Salt & Pepper', url: 'eicDtA9Yu-A' },
    { title: 'Digital Certificates Explained', url: '5rT6fZUwhG8' },
    { title: 'Kerberos Authentication Explained', url: '5N242XcKAsM' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
