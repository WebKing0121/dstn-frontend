import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cissp-mind-card',
  templateUrl: './cissp-mind-card.component.html',
  styleUrls: ['./cissp-mind-card.component.scss']
})
export class CisspMindCardComponent implements OnInit {
  @Input() title: string;
  @Input() url: string;
  @Input() itemId: number;
  @Input() groupSize: number;
  @Input() groupId: number;
  urlSafe: SafeResourceUrl;
  imgPath: string

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.imgPath = this.groupId + '' + (this.groupSize > 1 ? ('.' + this.itemId) : '')
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/watch?v='+this.url);
  }

}
