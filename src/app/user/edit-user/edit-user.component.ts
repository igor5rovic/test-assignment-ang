import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit, OnDestroy {
  editUserForm: FormGroup;
  userData!: User | null;
  userSubscription: Subscription;

  constructor(
    private readonly userService: UserService,
    private router: Router
  ) {
    this.userSubscription = userService.selectedUser$.subscribe(
      (user: User | null) => {
        if (!!user) {
          this.userData = user;
        } else {
          this.router.navigateByUrl('users');
        }
      }
    );

    this.editUserForm = new FormGroup({
      name: new FormControl(this.userData!.name, Validators.required),
      username: new FormControl(this.userData!.username, Validators.required),
      email: new FormControl(this.userData!.email, Validators.required),
      street: new FormControl(
        this.userData!.address.street,
        Validators.required
      ),
      suite: new FormControl(this.userData!.address.suite, Validators.required),
      city: new FormControl(this.userData!.address.city, Validators.required),
      zipcode: new FormControl(
        this.userData!.address.zipcode,
        Validators.required
      ),
      geoLat: new FormControl(
        this.userData!.address.geo.lat,
        Validators.required
      ),
      geoLng: new FormControl(
        this.userData!.address.geo.lng,
        Validators.required
      ),
      phone: new FormControl(this.userData!.phone, Validators.required),
      website: new FormControl(this.userData!.website, Validators.required),
      companyName: new FormControl(
        this.userData!.company.name,
        Validators.required
      ),
      companyCatchPhrase: new FormControl(
        this.userData!.company.catchPhrase,
        Validators.required
      ),
      companyBs: new FormControl(
        this.userData!.company.bs,
        Validators.required
      ),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.editUserForm.value);
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
