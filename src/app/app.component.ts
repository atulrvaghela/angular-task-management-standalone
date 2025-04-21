import { Component } from '@angular/core';

import { DUMMY_USERS } from '../assets/dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,
  // imports: [HeaderComponent,
  //   UserComponent,
  //   TasksComponent,
  //   NgFor,
  //   NgIf
  // ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  users = DUMMY_USERS;
  selectedUserId?: string;
  
  get selectedUser() {
    return this.users.find(((user) => user.id == this.selectedUserId));
  }

  selectedUserChange(id: string) {
    this.selectedUserId = id;
  }
}
