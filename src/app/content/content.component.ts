import { Component, computed } from '@angular/core';
import { LeftPanelComponent } from "../left-panel/left-panel.component";
import { HeaderComponent } from "../header/header.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { MatCardModule } from '@angular/material/card';
import { UserListComponent, Users } from "../common-components/user-list/user-list.component";
import { ReimbursementComponent } from "../reimbursement/reimbursement.component";
import { RoutingService } from '../routing.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  imports: [LeftPanelComponent, HeaderComponent, DashboardComponent,CommonModule, MatCardModule, UserListComponent, ReimbursementComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  contactList : Users[] = [
    {
      role: 'Email',
      summary_amount: 'help@domain.in,',
      icon: 'assets/email.svg'
      
    },
    {
      role: 'Call',
      summary_amount: '+91 9999-555-777',
      icon: 'assets/call.svg'
    }
  ];

  resouceList: Users[] = [
    {
      name: 'Help Documentation',
      icon: 'assets/document.svg'
    },
    {
      name : 'FAQ',
      icon: 'assets/faq.svg'
    },
    {
      name: 'Essential Business Guide',
      icon: 'assets/guides.svg'
    }
  ];
  
  constructor(public routerService: RoutingService) {} 
  
  currentPage = computed(() => this.routerService.current_page()); 
}
