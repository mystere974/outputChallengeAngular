import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularOutputChallenge';

  
  onomatopiaList: string[] = []

  constructor() {
    
  }

  ngOnInit(): void {
  }

  receiveOnomatopia(event: string): void {
    this.onomatopiaList.push(event).toString();
    console.log(event);
    
  }

}
