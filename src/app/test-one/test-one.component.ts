import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-one',
  templateUrl: './test-one.component.html',
  styleUrls: ['./test-one.component.css']
})
export class TestOneComponent implements OnInit {
  public name = "";
  nameTemp = "{ ___ }";
  allowGenerate: boolean = false;
  check:string;
  textGenerate: boolean = false;
  textDisplay: boolean = true;
  counts = [];
  fifth: boolean = false;
  counter:number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  onUpdateName(event: Event){
    this.name = (<HTMLInputElement>event.target).value;
    this.nameTemp = this.name;
    if(this.name){
      this.allowGenerate = true}
    }
  onGenerate(){
    this.textGenerate = true;
    }
  onReset(){
    this.textGenerate = false;
    this.name = "";
    this.nameTemp = "{ ___ }";
    this.allowGenerate = false;
    this.counts = [];
    }
  onCreateCount():void{
    this.textDisplay = !this.textDisplay;
    this.counts.push(this.counts.length + 1);
    this.fifth = this.counts.length % 5 ? false : true;
    }

}
