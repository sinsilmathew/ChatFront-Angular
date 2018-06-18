import { Component } from '@angular/core';
//component decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//all logical parts
export class AppComponent {
  title = 'app';
}
