import { Component, EventEmitter, Input, input, Output, ViewEncapsulation } from '@angular/core';
import { MenuItem } from '../menu-group/menu-group.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-items',
  imports: [CommonModule],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class MenuItemsComponent {
  @Input() itemIcon : string = "";
  @Input() itemName : string = "";
  @Input() selectedContainer : string = "";
  @Output() onSelectionChanged = new EventEmitter<string>();
  @Input() isDropDown : boolean = false;

  containerchanged(Name : string){
    this.onSelectionChanged.emit(Name);
  }
}
