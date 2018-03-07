// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
//
// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
// import { catchError, map, tap } from 'rxjs/operators';
//
// import { User } from './user';
// import { MessageService } from './message.service';
//
// const httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
//
// @Injectable()
// export class UserService {
//
//     //private toursUrl = 'api/tours';  // URL to web api
//
//     constructor(
//         private http: HttpClient,
//         private messageService: MessageService) { }
//
//     /** POST: add a new tour to the server */
//     // addTour (tour: User): Observable<User> {
//     //     console.log(user);
//     //     return this.http.post<User>(this.user, user, httpOptions).pipe(
//     //         tap((user: User) => this.log(`added user w/ id=${user.id}`)),
//     //         catchError(this.handleError<User>('addUser'))
//     //     );
//     // }
//
//
// }