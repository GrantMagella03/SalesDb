import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menus = [
    {
      display: "Home",
      route: "home",
      color: "silver"
    }, 
    {
      display: "About",
      route: "about",
      color: "silver"
    },
    {
      display: "Customers",
      route: "customers",
      color: "silver"
    },
    {
      display: "Test",
      route: "404",
      color: "silver"
    }
  ];
}
