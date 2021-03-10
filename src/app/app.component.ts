import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';
  name = 'Tim';

  onOpen(a:string) :void{
    console.log("open")
  }

  onClose(a:string) :void{
    console.log("close")
  }
}
