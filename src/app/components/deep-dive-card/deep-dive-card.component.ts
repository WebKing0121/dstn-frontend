import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-deep-dive-card',
  templateUrl: './deep-dive-card.component.html',
  styleUrls: ['./deep-dive-card.component.scss']
})
export class DeepDiveCardComponent implements OnInit {
  @Input() link: string;
  @Input() title: string;
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+this.link+'?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com');
  }
}
