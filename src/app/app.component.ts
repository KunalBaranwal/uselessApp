import { Component } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UselessApp';
  isVisible = true;
  isDragged = false;
  nextRound = false;
  pageTwo = false;
  pageOne = true;

  constructor(private router:Router){

  }
  delete(){
    this.isVisible = false;
    this.nextRound = true;
  }

  trashVisible(){
    this.isDragged = true;
    console.log(this.isDragged);
    
  }

  gotoPage(pageName: string){
    console.log("Door is clicked");
    this.pageTwo = true;
    this.pageOne = false
  }

}
