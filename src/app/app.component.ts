import { Component } from '@angular/core';
declare function getToday(): any;
declare function greetings(name: any): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit(): void {
    getToday();
    greetings('rohol');
  }
  
  title = 'ogani';
}
