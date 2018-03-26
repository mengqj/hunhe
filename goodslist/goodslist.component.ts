import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Params } from '@angular/router';
import { Http,Jsonp } from '@angular/http';  
@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  constructor(public route:ActivatedRoute,public http:Http,public jsonp:Jsonp ) { 

  }
  @Input() list=[1,2,3,4,5];
  num:number;
  ngOnInit() {
    // this.route.params.subscribe(data=>{
    //   this.num=data.id;

    // });


    this.jsonp.get(' http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK').subscribe(data=>{
      // console.log(JSON.parse(data['_body']));
      console.log(data['_body'])
      this.list=data['_body'];
     
    },err=>{
      console.log(err);
    }
  )
  }
  // goDetail(idx){
  //   this.route.navigate(['/gooddetail',idx]);
}
