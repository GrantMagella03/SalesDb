import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menus = [
    {
      display: "Customers",
      route: "",
      color: "silver"
    }, 
    {
      display: "Test",
      route: "",
      color: "silver"
    },
    {
      display: "Test",
      route: "",
      color: "silver"
    },
    {
      display: "Test",
      route: "",
      color: "silver"
    }
  ];
}
