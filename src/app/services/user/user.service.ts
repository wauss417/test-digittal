import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
// App models
import {
    User
} from '@models';
// App constants
import {
    ApiConstants
} from '@constants'

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private http: HttpClient
    ) { }

    /**
     * Request for all Users
     *
     * @returns {Observable<User[]>}
     */
    getAllUsers(): Observable<User[]> {
        const url = `${ApiConstants.baseUrl}/${ApiConstants.user}`;
        return this.http.get(url, { observe: 'response' }).pipe(
            map((data: any) => {
                return (data.body) as User[];
            }),
            catchError((error: any) => {
                return throwError(error);
            })
        );
    }

    /**
     * Request to get user by id
     *
     * @param {numer} id user id 
     * @returns {Observable<User>}
     */
    getUser(id: number): Observable<User> {
        const url = `${ApiConstants.baseUrl}/${ApiConstants.user}/${id}`;
        return this.http.get(url, { observe: 'response' }).pipe(
            map((data: any) => {
                return (data.body) as User;
            }),
            catchError((error: any) => {
                return throwError(error);
            })
        );
    }
}
