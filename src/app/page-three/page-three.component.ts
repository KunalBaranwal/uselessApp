import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss']
})
export class PageThreeComponent implements OnInit {
  isDoorVisible = false;
  clickCount = 0;
  textAnnoy = "";
  pageFour = false;
  pageThree = true;

  constructor() { }

  ngOnInit(): void {
  }

  showDoor(){
    this.isDoorVisible = true;
  }

  count(){
    this.clickCount++;
    console.log(this.clickCount);
    if(this.clickCount < 5){
      this.textAnnoy = "";
    }
    else if(this.clickCount > 5 && this.clickCount < 10){
      this.textAnnoy = "Trapped? Yeah I guess. Try to find a way yourself."
    }
    else if(this.clickCount > 10 && this.clickCount < 15){
      this.textAnnoy = "What? Find a way yourself!"
    }
    else if(this.clickCount > 15 && this.clickCount < 20){
      this.textAnnoy = "HAHAHA! I am really enjoying this. Just find a way. It's easy!"
    }
    else if(this.clickCount > 20){
      this.textAnnoy = "I already gave you so many hints. Just find a way. It is on the screen!!!"
    }
  }

  toPageFour(){
    this.pageFour = true;
    this.pageThree = false;
  }
}
