import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
mark1="Physics : "
mar1=100
mark2="Chemistry : "
mar2=100
mark3="Mathematics : "
mar3=89
total="Total : "

colorValue="red"

styles={
  'color':'blue',
  'width':'200px',
  'background-color':'aqua',
  'font-weight':'bolder',
  'font-size':'larger',
}
set(){
  let css_code={  'color':'blue',
  'width':'200px',
  'background-color':'aqua',
  'font-weight':'bolder',
  'font-size':'larger'};
  return css_code;
}
name="Godwin"
}
