import { Component } from '@angular/core';
import { UserListComponent, Users } from "../common-components/user-list/user-list.component";

@Component({
  selector: 'app-notification',
  imports: [UserListComponent],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {

   users1 : Users[] = [
      {
        name : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, ',
        role: 'Nursing Assistant',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
      },
      {
        name : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, ',
        role: 'President of Sales',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
      },
      {
        name : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, ',
        role: 'Medical Assistant',
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
      },
      {
        name : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, ',
        role: 'Project Manager',
        avatar: 'https://randomuser.me/api/portraits/men/4.jpg'
      },
      {
        name : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, ',
        role: 'Nursing Assistant',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
      },
      {
        name : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, ',
        role: 'President of Sales',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
      },
      {
        name : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, ',
        role: 'Medical Assistant',
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
      },
      {
        name : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, ',
        role: 'Project Manager',
        avatar: 'https://randomuser.me/api/portraits/men/4.jpg'
      },
      {
        name : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, ',
        role: 'Nursing Assistant',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
      },
      {
        name : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, ',
        role: 'President of Sales',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
      },
      {
        name : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, ',
        role: 'Medical Assistant',
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
      },
      {
        name : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, ',
        role: 'Project Manager',
        avatar: 'https://randomuser.me/api/portraits/men/4.jpg'
      },
    ];
  

}
