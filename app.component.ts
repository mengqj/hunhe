import { Component } from '@angular/core';
import { EventEmitter,Input,Output } from '@angular/core';
import { GetDataService} from './services/get-data-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']//引入css,sss
})
export class AppComponent {
  // getdata=new GetDataService();
  constructor(public getdata:GetDataService) { }
  data=[];
  data1;
  getData(e){
    this.data.push(e);
    this.getdata.set('key1',this.data);
  }

ngOnInIt(){
  this.data1=(this.getdata.get('key1')).split(',');
}
  }

