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
        this.subscriptions.push(
            this.postService.getAllPost().subscribe(
                (resp: Post[]) => {
                    this.posts = resp
                },
                (e: any) => {
                    console.error('Cant get post', e)
    
                }
            )
        )
    }

    ngOnDestroy():void {
        this.subscriptions.forEach(e => e.unsubscribe());
    }
}
