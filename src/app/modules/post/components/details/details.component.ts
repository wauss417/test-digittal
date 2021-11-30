import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { forkJoin, Subscription } from 'rxjs';
// App models
import { Comment, Post, User } from '@models';
// App services
import { PostService, UserService } from '@services';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {
    
    public paramId: number = null;
    public post: Post = null;
    public user: User = null;
    public comments: Comment[] = null;
    public loading = false;
    
    private subscriptions: Subscription[] = [];
    private state = null;

    constructor(
        private postService: PostService,
        private userService: UserService,
        private route: ActivatedRoute,
        private location: Location
    ) { }


    ngOnInit(): void {
        this.state = this.location.getState()
        this.loading = true
        if (this.state?.post) {
            this.post = this.state.post;
            this.getPostData();
        } else {
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
                    this.getPostData();
                },
                (e: any) => {
                    this.post = null;
                    this.loading = false;
                    console.error('Cant get post', e)
                }
            )
        )
    }

    getPostData(){
        this.subscriptions.push(
            forkJoin([
                this.userService.getUser(this.post.userId),
                this.postService.getPostComments(this.post.id),
            ])
            .subscribe(
                ([user, comments]: [User, Comment[]]) => {
                    this.user = user;
                    this.comments = comments;
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

    ngOnDestroy(): void {
        this.subscriptions.forEach(e => e.unsubscribe());
    }
}
