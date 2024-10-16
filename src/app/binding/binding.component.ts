import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

label_style() {
let sty={'color':'black',
'font_size':'larger',
'margin-left':'50%',
'margin-top':'50px',
'border':'2px solid yellow',
'border-radius':'130px 130px',
'padding':'70px',
'background-color':'orange'};
return sty;
}
value=0;
sty={};
opa=0.3;
oddeven="";
  counter() {
  this.value++;
  this.label_green();
  this.sty=this.label_green();
    this.opa+=0.05;
    this.oddeven=this.odd_even();
}
  label_green() {
    let sty={'color':'black',
      'font_size':'larger',
      'margin-left':'50%',
      'margin-top':'50px',
      'border':'2px solid yellow',
      'border-radius':'130px 130px',
      'padding':'70px',
      'background-color':'green'};
      return sty;
  }
reset() {
  this.value=0;
  this.label_style();
  this.sty=this.label_style();
  this.opa=0.3;
  this.oddeven=this.odd_even();



  }
  counter_down() {
    this.value--;
   this.sty= this.label_red();
   this.opa-=0.05;
   this.oddeven=this.odd_even();



  }
  label_red() {
    let sty={'color':'black',
      'font_size':'larger',
      'margin-left':'50%',
      'margin-top':'50px',
      'border':'2px solid yellow',
      'border-radius':'130px 130px',
      'padding':'70px',
      'background-color':'red'};
      return sty;
  }
  odd_even(){
    if(this.value%2==0){
        return "Even";
    }
    else{
      return "Odd";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
}
