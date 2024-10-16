import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-btn',
  templateUrl: './common-btn.component.html',
  styleUrls: ['./common-btn.component.css']
})
export class CommonBtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 @Input() val="not defined"
}
