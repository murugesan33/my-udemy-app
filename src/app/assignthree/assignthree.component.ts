import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignthree',
  templateUrl: './assignthree.component.html',
  styleUrls: ['./assignthree.component.css']
})
export class AssignthreeComponent implements OnInit {
  status = false;
  cntArr = [];
  constructor() { }

  ngOnInit() {}

  onCountBtnClick(){
    var d = new Date();
    var n = d.getTime();
    this.status = (this.status) ? false : true;
    this.cntArr.push(n);
  }

}
