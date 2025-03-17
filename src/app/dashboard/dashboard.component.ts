import { Component } from '@angular/core';
import { DashboardCardComponent } from "../common-components/dashboard-card/dashboard-card.component";
import { CommonModule } from '@angular/common';
import { UserListComponent, Users } from "../common-components/user-list/user-list.component";
import { MatCardModule } from '@angular/material/card';

export interface SummaryItem {
  title: string;
  amount: number;
  icon: string;
  iconColor: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [DashboardCardComponent, CommonModule, UserListComponent, MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  dashboard_card_detials = [
    {
      title : "Pending reimbursement",
      imgPath : "/assets/timer.svg",
      content : "75",
      actions : ["View All Request"],
      footerContent: "35% in Last 30 days"
    },
    {
      title : "Approved reimbursement",
      imgPath : "/assets/rupee.svg",
      content : "478",
      actions : ["Track All Reimbursement"],
      footerContent: "15% in last 30 days"
    },
    {
      title : "Advances request",
      imgPath : "/assets/wallet1.svg",
      content : "62",
      actions : ["View All Request"],
      footerContent: "9% in last 30 days"
    }
  ]

  users1 : Users[] = [
    {
      name: 'Rohit Sharma',
      role: 'Nursing Assistant',
      amount: 27637,
      expenses: 8,
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      name: 'Bhargavi Mehta',
      role: 'President of Sales',
      amount: 4956,
      expenses: 6,
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      name: 'Divya Shah',
      role: 'Medical Assistant',
      amount: 3470,
      expenses: 3,
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    {
      name: 'Kirubasankar Rajveer',
      role: 'Project Manager',
      amount: 2063,
      expenses: 2,
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg'
    },
  ];

  summaryList: Users[] = [
    {
      role: 'Total Expenses',
      summary_amount: 452328,
      icon: '/assets/total_expenses.svg', 
    },
    {
      role: 'Total Advances',
      summary_amount: 129698,
      icon: '/assets/wallet1.svg',
    },
    {
      role: 'Total Reimbursements',
      summary_amount: 232510,
      icon: '/assets/total_reimbursement.svg',
    }
  ];

  topSpenders: Users[] = [
    {
      name: 'Karan Kapoor',
      avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
      role: 'Medical Assistant',
      amount: 99122,
    },
    {
      name: 'Rupa Chandrasekar',
      avatar: 'https://randomuser.me/api/portraits/women/21.jpg',
      role: 'Medical Assistant',
      amount: 89922,
    },
    {
      name: 'Aarush Mishra',
      avatar: 'https://randomuser.me/api/portraits/men/31.jpg',
      role: 'Marketing Coordinator',
      amount: 72873,
    },
    {
      name: 'Aarav Saxena',
      avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
      role: 'Web Designer',
      amount: 62970,
    },
    {
      name: 'Somesh Nanda',
      avatar: 'https://randomuser.me/api/portraits/men/51.jpg',
      role: 'Medical Assistant',
      amount: 54812,
    },
    {
      name: 'Rohit Sharma',
      avatar: 'https://randomuser.me/api/portraits/men/61.jpg',
      role: 'Nursing Assistant',
      amount: 27637,
    },
    {
      name: 'Bhargavi Mehta',
      avatar: 'https://randomuser.me/api/portraits/women/71.jpg',
      role: 'President of Sales',
      amount: 4956,
    },
    {
      name: 'Divya Shah',
      avatar: 'https://randomuser.me/api/portraits/women/81.jpg',
      role: 'Medical Assistant',
      amount: 3470,
    },
  ];

  
  
}
