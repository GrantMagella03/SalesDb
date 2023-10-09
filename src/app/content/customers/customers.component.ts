import { Component } from '@angular/core';
import { Customer } from 'src/app/customer.class';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  Cs!:Customer[];
  constructor(
    private CSVC: CustomerService
  ){}
  ngOnInit():void{
    this.CSVC.list().subscribe({
      next: (res)=>{
        this.Cs=res
      },
      error: (err)=>{
          console.error(err);
      }
    });
  }
}
