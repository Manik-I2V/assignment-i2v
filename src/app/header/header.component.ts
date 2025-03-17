import { Component } from '@angular/core';
import { DropDownComponent } from "../drop-down/drop-down.component";
import { CommonModule } from '@angular/common';
import { NotificationComponent } from "../notification/notification.component";

@Component({
  selector: 'app-header',
  imports: [DropDownComponent, CommonModule, NotificationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isDropdownVisible = false;
  isNotificationVisible = false;

  showDropdown() {
    this.isDropdownVisible = true;
  }

  hideDropdown() {
    this.isDropdownVisible = false;
  }

  showNotification() {
    this.isNotificationVisible = true;
  }

  hideNotification() {
    this.isNotificationVisible = false;
  }

}
