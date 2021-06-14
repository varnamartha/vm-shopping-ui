import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { OrderServices } from 'src/app/services/order.services';
import { OrderResponse } from '../../models/orden-models';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
})

export class OrdersComponent implements OnInit {

  orderSearch: FormGroup; 
  visible = false;
  notData = false;
  orders : Array<OrderResponse> = [];

  constructor(private orderServices: OrderServices,private fb: FormBuilder) { 
    this.orderSearch = this.fb.group({     
      email : [''],
    });
  }

  ngOnInit(): void {
  }

  searchOrders()
  {   
    let cadena = this.orderSearch.value.email;
    console.log(cadena);
    this.orderServices._getOrdersByEmail(cadena).subscribe( data =>
      {   
        this.orders = data;  
         console.log(this.orders);
        this.visible = this.orders.length > 0;
        this.notData = !this.visible;
      });  
  }
}
