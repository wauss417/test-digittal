import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '@models';

import { PostService } from '@services';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

    public posts: Post[] = null;
    private subscriptions: Subscription[] = [];

    constructor(
        private postService: PostService
    ) { }

    ngOnInit(): void {
        this.getPost();
    }


    getPost() {
        this.subscriptions.push(
            this.postService.getAllPost().subscribe(
                (resp: Post[]) => {
                    this.posts = resp
                },
                (e: any) => {
                    this.posts = [];
                    console.error('Cant get post', e)
                }
            )
        )
    }

    filterPost(form: any) {
        // Por su puesto esto tambien se puede hacer por filter array sin necesidad que se haga el request
        this.subscriptions.push(
            this.postService.getUserPost(form.user).subscribe(
                (resp: Post[]) => {
                    this.posts = resp
                },
                (e: any) => {
                    this.posts = [];
                    console.error('Cant get post', e)
                }
            )
        )
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(e => e.unsubscribe());
    }
}
