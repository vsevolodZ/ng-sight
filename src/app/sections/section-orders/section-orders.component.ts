import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html'
  // styleUrls: ['./section-orders.component.scss']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

//  public orders: Order[] = [
//     {id: 1, customer:
//        {id: 1, name: 'Cucumber aerospace', email: 'info@caerospace.io', state: 'active'},
//         total: 100, placed: new Date(2018, 08, 19), fullfilled: new Date(2018,08,25)}
//   ];



orders: Order[] = [
  {id: 1, customer:
    {id: 1, name: 'Pretzel industries', state: 'completed', email: 'info@pi.com'},
    total: 100, placed: new Date(2018, 8,9), fulfilled: new Date(2018,9,9)},
  {id: 2, customer:
    {id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'},
    total: 230, placed: new Date(2017, 12, 1), fulfilled: new Date(2017, 12, 3)},
  {id: 3, customer:
    {id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'},
    total: 230, placed: new Date(2017, 12, 1), fulfilled: new Date(2017, 12, 3)},
  {id: 4, customer:
    {id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'},
    total: 230, placed: new Date(2017, 12, 1), fulfilled: new Date(2017, 12, 3)},
  {id: 5, customer:
    {id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'},
    total: 230, placed: new Date(2017, 12, 1), fulfilled: new Date(2017, 12, 3)}
];

  ngOnInit() {
  }

}