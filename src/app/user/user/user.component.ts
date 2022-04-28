import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() user!: User;

  constructor(
    private readonly userService: UserService,
    private router: Router
  ) {}

  onEditUser() {
    this.userService.selectUser(this.user);
    this.router.navigateByUrl('edit/user');
  }

  ngOnInit(): void {}
}
