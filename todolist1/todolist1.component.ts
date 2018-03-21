import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import {GetDataService } from './../services/get-data-service.service';
@Component({
  selector: 'app-todolist1',
  templateUrl: './todolist1.component.html',
  styleUrls: ['./todolist1.component.css']
})
export class Todolist1Component implements OnInit {
  constructor(public getdata:GetDataService) { }
  data;
  key2;
  data1;
  key1;
  ngOnInit() {
    this.data=this.getdata.get('key2');
    this.key2=this.data.split(',');
    this.data1=this.getdata.get('key1');
    this.key1=this.data1.split(',');
    if(this.key2!=''||this.key1!='')
    {
      this.comlist=this.key2;
      this.tolist=this.key1;
    }
 
  }
  @Input() tolist:Array<any>;
  comlist=[];
  deleteData(i){
    this.tolist.splice(i,1);
    this.getdata.delete(this.key1);
  }
  change(i){
    this.comlist.push(this.tolist[i])
    this.tolist.splice(i,1);

    this.getdata.set('key1',this.tolist);
    this.getdata.set('key2',this.comlist);
  }
  deleteData1(i){
    this.comlist.splice(i,1);
    this.getdata.delete(this.key2);
  }
  change1(i){
    this.tolist.push(this.comlist[i])
    this.comlist.splice(i,1);
    this.getdata.set('key1',this.tolist);
    this.getdata.set('key2',this.comlist);
  }
}

