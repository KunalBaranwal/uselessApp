import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {
  pageTwo = true;
  pageThree = false;
  constructor() { }

  ngOnInit(): void {
  }

  volumeIcon(){
    this.pageTwo = false;
    this.pageThree = true;
  }

}
