import { Component } from '@angular/core';

import { HomeComponent } from '../home/home.component';
import { LoanComponent } from '../loan/loan.component';
import { InvestmentComponent } from '../investment/investment.component';
import { DiscoveryComponent } from '../discovery/discovery.component';
import { ProfileComponent } from '../profile/profile.component';
/**
 *  tabs page component
 */
@Component({
  templateUrl: 'tabs.component.html'
})
export class TabsComponent {

  homeRoot = HomeComponent;
  loanRoot = LoanComponent;
  investRoot = InvestmentComponent;
  discoveryRoot = DiscoveryComponent;
  profileRoot = ProfileComponent;

  constructor() {

  }
}
