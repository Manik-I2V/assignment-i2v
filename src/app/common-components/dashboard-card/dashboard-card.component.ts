import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard-card',
  imports: [MatCardModule,CommonModule],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.scss'
})
export class DashboardCardComponent {
  @Input() title: string = "";
  @Input() imgPath: string = "";
  @Input() content: string = "";
  @Input() buttons: string[] = [""];
  @Input() actions: string[] = [""];
  @Input() footerContent : string = "";
}
