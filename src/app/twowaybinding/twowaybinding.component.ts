import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {
[x: string]: any;

ans: any;
check() {
if(this.num1%2==0){
  this.output="Even"
}
else{
  this.output="Odd"
}
}
factorial(){
  let a=1;
  let num=this.num1;
  while(num!=0){
    a = a * num;
    num--;
    this.ans=a;
  }
}
  constructor() { }

  ngOnInit(): void {
  }
num1=0;
output="";

operand1=0;
operand2=0;
val_sty="";
value:any;
div(){
  this.value= this.operand1/this.operand2;
  this.val_sty="red"
}
mul() {
  this.value= this.operand1*this.operand2;
this.val_sty="blue"
}
sub() {
  this.value= this.operand1-this.operand2;
  this.val_sty="orange"

}
add() {
  this.value= this.operand1+this.operand2;
  this.val_sty="brown"
}
res(){
this.value="";
this.operand1=0;
this.operand2=0;

}
}
