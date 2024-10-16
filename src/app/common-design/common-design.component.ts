import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-design',
  templateUrl: './common-design.component.html',
  styleUrls: ['./common-design.component.css']
})
export class CommonDesignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
@Input() head="Baa"
@Input()  image:string="../../assets/f16.jpg"
 @Input() price="100"
 @Input() desc="Helooo"
 img_style={
  'width':'250px',
 }
 styles(){
let css_code= {'display': 'flex',
  'flex-direction': 'column',
  'align-items': 'center',
  'border': 'solid 5px white',
  'border-radius': '10px',
  'width': '400px',
  'height': 'max-content',
  'justify-content': 'space-evenly',    
  'background': 'linear-gradient(rgb(166, 192, 223),rgb(48, 124, 199))' 
 };
 return css_code;
}
}
