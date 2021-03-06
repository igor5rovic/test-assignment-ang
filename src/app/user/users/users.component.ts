import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private readonly userService: UserService) {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    })
   }

  ngOnInit(): void {
  }

}
