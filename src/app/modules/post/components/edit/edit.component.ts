import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
// App models
import { Post } from '@models';
// App services
import { PostService } from '@services';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {

    public paramId: number = null;
    public post: Post = null;
    public loading = false;
    
    private subscriptions: Subscription[] = [];
    private state = null;

    constructor(
        private postService: PostService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.state = this.location.getState()
        console.log(this.state);
        if (this.state?.post) {
            this.post = this.state.post
        } else {
            this.loading = true
            this.route.params.subscribe(params => {
                this.paramId = params['id'];
                this.getPost();
            });
        }
    }

    getPost() {
        this.subscriptions.push(
            this.postService.getPost(this.paramId).subscribe(
                (resp: Post) => {
                    this.post = resp;
                    this.loading = false;
                },
                (e: any) => {
                    this.post = null;
                    this.loading = false;
                    console.error('Cant get post', e)
                }
            )
        )
    }

    submitPost(form: Partial<Post>) {
        form.userId = 1;
        this.subscriptions.push(
            this.postService.editPost(this.post).subscribe(
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
