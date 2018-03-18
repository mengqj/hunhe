import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { GetDataService} from './../../services/get-data.service';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() {
   }
   @Output() event=new EventEmitter();
  ngOnInit() {
  }
  
  content = '';
  addData(){
    this.event.emit(this.content);
    this.content = '';
  }
  
  
}
