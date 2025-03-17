import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Users {  
  name?: string ,
  role?: string ,
  amount?: number ,
  expenses?: number,
  avatar?: string ,
  icon? :string,
  summary_amount? :number|string
}

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  @Input() borderOnItem : boolean = false;
  @Input() list : Users[] = [{
    name:  "",
    role:  "",
    amount:  0 ,
    expenses:  0,
    avatar:  "",
    summary_amount: 0
  }]
}