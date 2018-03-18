import { Component } from '@angular/core';
import { EventEmitter,Input,Output } from '@angular/core';
import { GetDataService} from './services/get-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']//引入css,sss
})
export class AppComponent {

   data=[];
   getData(e){
     this.data.push(e);
   }
}


