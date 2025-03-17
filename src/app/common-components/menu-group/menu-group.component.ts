import { Component, Input } from '@angular/core';
import { MenuItemsComponent } from "../menu-items/menu-items.component";
import { CommonModule } from '@angular/common';
import { RoutingService } from '../../routing.service';

export interface MenuItem {
  itemIcon: string;
  itemName: string;
  activeIcon: string;
}

@Component({
  selector: 'app-menu-group',
  imports: [MenuItemsComponent , CommonModule],
  templateUrl: './menu-group.component.html',
  styleUrl: './menu-group.component.scss'
})

export class MenuGroupComponent {
  selectedContainer : string = "Dashboard";
  @Input() isDropDown : boolean = false;

  
  @Input() menuList :MenuItem[] = [
    {
      itemIcon : "",
      itemName : "",
      activeIcon: ""
    }
  ];

  constructor(private routerService : RoutingService){

  }

  onSelectionChange(event : string){
    this.selectedContainer = event;
    this.routerService.setCurrentPage(event);
  }
}
