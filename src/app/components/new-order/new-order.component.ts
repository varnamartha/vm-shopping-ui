import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product-models';
import {OrderServices} from '../../services/order.services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Client } from '../../models/client-models';
import { Order } from '../../models/orden-models';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})

export class NewOrderComponent implements OnInit {

  product: Product; 
  createOrderForm: FormGroup = this.fb.group({
    name : [''],
    email : [''],
    phone : ['']
  });
  isShowingSpinner = false;

  constructor( private orderServices: OrderServices, private fb: FormBuilder)
  { 
    this.product = new Product(4,"SAMSUNG - Televisor inteligente", "SAMSUNG - Televisor inteligente de 40 pulgadas LED, FHD de 1080P (modelo 2019).",100,"USD","../../../assets/img/4QEXSUD65VCUNJWMSOPZQXXYQI.jpg");  
  } 

  ngOnInit(): void {
  }

  createOrder()
  { 
     this.isShowingSpinner = true;
     let client = new Client(this.createOrderForm.value.name,this.createOrderForm.value.email, this.createOrderForm.value.phone);
     let order = new Order(this.product, client);
     this.orderServices._postOrder(order).subscribe(data =>{
       if(data.urlRedirection)
       {
          window.location.href = data.urlRedirection;
       }
      });
  }
}
