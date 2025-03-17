import { Component } from '@angular/core';
import { MenuGroupComponent, MenuItem } from "../common-components/menu-group/menu-group.component";

@Component({
  selector: 'app-drop-down',
  imports: [MenuGroupComponent],
  templateUrl: './drop-down.component.html',
  styleUrl: './drop-down.component.scss'
})
export class DropDownComponent {

  menuList : MenuItem[] = [
      {
        itemIcon : "/assets/dashboard-fill.svg",
        itemName : "Department",
        activeIcon: "assets/dashboard-fill.svg"
      },
      {
        itemIcon : "/assets/user-group.svg",
        itemName : "Users",
        activeIcon: "assets/user-group.svg"
      },
      {
        itemIcon : "/assets/reimbursement.svg",
        itemName : "Document",
        activeIcon: "assets/reimbursement.svg"
      },
      {
        itemIcon : "/assets/wallet.svg",
        itemName : "Advances",
        activeIcon: "assets/wallet.svg"
      },
      {
        itemIcon : "/assets/report.svg",
        itemName : "Project",
        activeIcon: "assets/report.svg"
      },
    ];

}
