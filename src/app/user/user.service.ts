import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'https://jsonplaceholder.typicode.com/';

  private readonly selectedUser = new BehaviorSubject<User | null>(null);
  readonly selectedUser$: Observable<User | null> = this.selectedUser.asObservable();

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(this.apiUrl + 'users').pipe(
      catchError((err) => {
        let errorMessage = err.error.message || 'An unknown error occurred!';
        this.errorHandler(err);
        return throwError(() => errorMessage);
      })
    );
  }

  selectUser(user: User){
    this.selectedUser.next(user);
  }

  errorHandler(err: Error) {
    //error handling logic
    console.log(err);
  }
}
