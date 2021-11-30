import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
// App models
import {
    Comment,
    Post
} from '@models';
// App constants
import {
    ApiConstants
} from '@constants'

@Injectable({
    providedIn: 'root'
})

export class PostService {

    constructor(
        private http: HttpClient
    ) { }

    /**
     * Request for posts
     *
     * @returns {Observable<Post[]>}
     */
    getAllPost(): Observable<Post[]> {
        const url = `${ApiConstants.baseUrl}/${ApiConstants.post}`;
        return this.http.get(url, { observe: 'response' }).pipe(
            map((data: any) => {
                return (data.body) as Post[];
            }),
            catchError((error: any) => {
                return throwError(error);
            })
        );
    }

    /**
     * Request for get post by id 
     *
     *      
     * @param {number} id post id
     * @returns {Observable<Post[]>}
     */
    getPost(id: number): Observable<Post> {
        const url = `${ApiConstants.baseUrl}/${ApiConstants.post}/${id}`;
        return this.http.get(url, { observe: 'response' }).pipe(
            map((data: any) => {
                return (data.body) as Post;
            }),
            catchError((error: any) => {
                return throwError(error);
            })
        );
    }

    /**
    * Request for user's posts
    *
    * @param {number} user user ID
    * @returns {Observable<Post[]>}
    */
    getUserPost(user: number): Observable<Post[]> {
        const url = `${ApiConstants.baseUrl}/${ApiConstants.post}?userId=${user}`;
        return this.http.get(url, { observe: 'response' }).pipe(
            map((data: any) => {
                return (data.body) as Post[];
            }),
            catchError((error: any) => {
                return throwError(error);
            })
        );
    }

    /**
    * Request for create a post
    *
    * @param {Post} data new post data
    * @returns {Observable<Post>}
    */
    createPost(data: Partial<Post>): Observable<Post> {
        const url = `${ApiConstants.baseUrl}/${ApiConstants.post}`;
        const params = data
        return this.http.post(url, params, { observe: 'response' }).pipe(
            map((data: any) => {
                return (data.body) as Post;
            }),
            catchError((error: any) => {
                return throwError(error);
            })
        );
    }

    /**
    * Request for edit a post
    *
    * @param {Post} data new post data
    * @returns {Observable<Post>}
    */
    editPost(data: Post): Observable<Post> {
        const url = `${ApiConstants.baseUrl}/${ApiConstants.post}`;
        const params = data
        return this.http.put(url, params, { observe: 'response' }).pipe(
            map((data: any) => {
                return (data.body) as Post;
            }),
            catchError((error: any) => {
                return throwError(error);
            })
        );
    }

    /**
     * Request to get all post comment
     *
     * @param {number} id post id
     * @returns {Observable<Comment[]>}
     */
    getPostComments(id: number): Observable<Comment[]> {
        const url = `${ApiConstants.baseUrl}/${ApiConstants.post}/${id}/${ApiConstants.comment}`;
        return this.http.get(url, { observe: 'response' }).pipe(
            map((data: any) => {
                return (data.body) as Comment[];
            }),
            catchError((error: any) => {
                return throwError(error);
            })
        );
    }
}
