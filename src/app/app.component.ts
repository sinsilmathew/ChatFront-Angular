import { Component } from '@angular/core';
//component decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',//template:'<h1>Hello</h1>',
  styleUrls: ['./app.component.css']
})

//all logical parts
export class AppComponent {
  title:string = 'Katerra Construct';
}
