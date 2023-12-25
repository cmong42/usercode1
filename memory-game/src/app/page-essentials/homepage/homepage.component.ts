import { Component, OnInit } from '@angular/core';
import { SetupComponent } from 'src/app/game/setup/setup.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  gameStarted: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  renderSetup(){
    this.gameStarted = true
  }

}
