import { Component, OnInit } from '@angular/core';
import { PointBuyService } from 'src/app/services/point-buy.service';

@Component({
  selector: 'app-ability-total-cost',
  templateUrl: './ability-total-cost.component.html',
  styleUrls: ['./ability-total-cost.component.scss']
})
export class AbilityTotalCostComponent implements OnInit {

  totalCost: number = 0;
  constructor(private pointBuy: PointBuyService) { }
  ngOnInit() {
    this.pointBuy.totalCost$.subscribe((totalCost) => {
      this.totalCost = totalCost;
    });
  }

}