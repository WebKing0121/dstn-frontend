import { Component, Input, OnInit } from '@angular/core';
import { OtherMember } from 'src/app/common/class/member';

@Component({
  selector: 'app-member-card-h',
  templateUrl: './member-card-h.component.html',
  styleUrls: ['./member-card-h.component.scss']
})
export class MemberCardHComponent implements OnInit {
  @Input() member: OtherMember;

  constructor() { }

  ngOnInit(): void {
  }

}
