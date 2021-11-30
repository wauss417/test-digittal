import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


import { Post } from '@models';
import { PostService } from '@services';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnDestroy {

    public post: Post = null;
    private subscriptions: Subscription[] = [];

    constructor(
        private postService: PostService
    ) { }


    ngOnInit(): void {
    }

    createPost(form: Partial<Post>) {
        form.userId = 1;
        this.subscriptions.push(
            this.postService.createPost(form).subscribe(
                (resp: Post) => {
                    this.post = resp
                },
                (e: any) => {
                    this.post = null;
                    console.error('Cant get post', e)
                }
            )
        )
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(e => e.unsubscribe());
    }
}
