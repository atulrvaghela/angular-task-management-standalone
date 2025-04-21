import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';
import { DUMMY_USERS } from '../../assets/dummy-users';
import { User } from './user.model';

// type User = {id: string, name: string, avatar: string}
// interface User {id: string, name: string, avatar: string}

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  users = DUMMY_USERS;

  // imagePath = input.required<string>();
  // name = input.required<string>();
  // id = input.required<string>();
  user = input.required<User>();
  @Input({required: true}) selected! :boolean;

  fullImagePath = computed(() => "assets/" + this.user().avatar);

  @Output() onSelectedUser = new EventEmitter();
  selectedUser(id: string) {
    this.onSelectedUser.emit(id);
  }

}
