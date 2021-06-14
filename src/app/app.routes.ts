import {RouterModule, Routes} from "@angular/router"
import { NewOrderComponent } from "./components/new-order/new-order.component";
import { OrderDetailsComponent } from "./components/order-details/order-details.component";
import { OrdersComponent } from './components/orders/orders.component';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [   
    {path:'home', component: HomeComponent},
    {path:'newOrder', component: NewOrderComponent},
    {path:'orders', component: OrdersComponent},
    {path:'orders/orderdetails/:id', component: OrderDetailsComponent},
    {path:'**', pathMatch: 'full', redirectTo: ''},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);