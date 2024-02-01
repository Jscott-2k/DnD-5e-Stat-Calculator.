import { Component, OnInit } from '@angular/core';
import { PointBuyService } from './services/point-buy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dnd-stat-calculator';
  totalCost: number = 0;
  constructor(private pointBuy: PointBuyService) { }
  ngOnInit() {
    this.pointBuy.totalCost$.subscribe((totalCost) => {
      this.totalCost = totalCost;
    });
  }
}
