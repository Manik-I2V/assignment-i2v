import { Component } from '@angular/core';
import { MenuGroupComponent, MenuItem } from "../common-components/menu-group/menu-group.component";

@Component({
  selector: 'app-left-panel',
  imports: [MenuGroupComponent],
  templateUrl: './left-panel.component.html',
  styleUrl: './left-panel.component.scss'
})
export class LeftPanelComponent {
  logoPath = "/assets/logo.png";
  theme = "light";
  menuList : MenuItem[] = [
    {
      itemIcon : "/assets/dashboard-inactive.svg",
      itemName : "Dashboard",
      activeIcon: "assets/dashboard-fill.svg"
    },
    {
      itemIcon : "/assets/user-group-inactive.svg",
      itemName : "Users",
      activeIcon: "assets/user-group.svg"
    },
    {
      itemIcon : "/assets/reimbursement-inactive.svg",
      itemName : "Reimbursement",
      activeIcon: "assets/reimbursement.svg"
    },
    {
      itemIcon : "/assets/wallet-inactive.svg",
      itemName : "Advances",
      activeIcon: "assets/wallet.svg"
    },
    {
      itemIcon : "/assets/report-inactive.svg",
      itemName : "Reports",
      activeIcon: "assets/report.svg"
    },
    {
      itemIcon : "/assets/analytics-inactive.svg",
      itemName : "Analytics",
      activeIcon: "assets/analytics.svg"
    },
    {
      itemIcon : "/assets/setting-inactive.svg",
      itemName : "Settings",
      activeIcon: "assets/setting.svg"
    },
  ];
  lightIcon = "/assets/sun.svg";
  darkIcon = "/assets/moon.svg"

}
