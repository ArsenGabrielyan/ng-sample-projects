import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { map, Observable } from 'rxjs';
import { CustomValidator } from './class/custom-validator';
import { IPost } from '../../interfaces/post';
import { ForumActions } from '../../store/actions/forum.actions';
import { ForumState } from '../../store/states/forum.state';

@Component({
  selector: 'app-forum-site',
  templateUrl: './forum-site.component.html',
  styleUrls: ['./forum-site.component.scss']
})
export class ForumSiteComponent {
  posts: IPost[] = [];
  frmPost!: FormGroup;
  @Select(ForumState) posts$!: Observable<IPost[]>;
  constructor(private frmBuild: FormBuilder, private store: Store){}
  ngOnInit():void{
    this.frmPost = this.frmBuild.group({
      title: ["", [Validators.required, CustomValidator.validateTitle]],
      link: ["", [Validators.required, CustomValidator.validateURL]]
    })
    this.posts$.pipe(map((v)=>this.posts = v)).subscribe();
  }
  addPost(){
    const post: IPost = {
      points: 0,
      title: this.frmPost.value.title,
      link: this.frmPost.value.link
    }
    this.store.dispatch(new ForumActions.AddPost(post))
    this.frmPost.reset({title: "", link: ""});
  }
  upvotePost(i:number){
    this.store.dispatch(new ForumActions.UpvotePost(i))
  }
  downvotePost(i:number){
    this.store.dispatch(new ForumActions.DownvotePost(i))
  }
}