import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

counter = 0
counter2 = 0
counter3 = 0

constructor(){
  setInterval(() => {
    this.counter++
  }, 500)
  setInterval(() => {
    this.counter2++
  }, 600)
  setInterval(() => {
    this.counter3++
  }, 700)
}

}
