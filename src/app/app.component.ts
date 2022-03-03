import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'childperent';
  employee = {
    id: 1,
    name: 'chintan',
    address: 'junagadh',
  };
  prenettochild(name: any) {
    alert(name);
  }
}
