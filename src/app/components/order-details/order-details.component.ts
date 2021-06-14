import { Component, OnInit } from '@angular/core';
import { OrderServices } from 'src/app/services/order.services';
import { ActivatedRoute} from '@angular/router'
import { OrderResponse } from '../../models/orden-models';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.sass']
})
export class OrderDetailsComponent implements OnInit {
  
  id= 0;
  order?:OrderResponse;

  constructor( private activatedRoute: ActivatedRoute, private orderServices: OrderServices) {  
   
    this.activatedRoute.params.subscribe(params =>
      {
        this.id = Number.parseInt(params['id']) ;
      })
      this.orderServices._getOrderDetails(this.id).subscribe(data =>{
        this.order = data;
      });
   }

  ngOnInit( ): void {
  }

}
