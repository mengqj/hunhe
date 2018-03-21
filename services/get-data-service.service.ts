import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
@Injectable()
export class GetDataService {
  constructor() { }
  i=0;
  list:any;
  set(key:string,value){
this.list=localStorage.setItem(key,value);
    return this.list;
   }
   get(key){
     this.list=localStorage.getItem(key);
     return this.list;
   }
   delete(key){
     localStorage.removeItem(key);
   }
}
