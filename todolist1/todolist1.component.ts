import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { GetDataService} from './../services/get-data.service';
@Component({
  selector: 'app-todolist1',
  templateUrl: './todolist1.component.html',
  styleUrls: ['./todolist1.component.css']
})
export class Todolist1Component implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  @Input() tolist:Array<any>;
  comlist=[];
  deleteData(i){
  	this.tolist.splice(i,1);
  }
  change(i){
    this.comlist.push(this.tolist[i])
    this.tolist.splice(i,1);
  }
  deleteData1(i){
  	this.comlist.splice(i,1);
  }
  change1(i){
    this.tolist.push(this.comlist[i])
    this.comlist.splice(i,1);
  }
}
