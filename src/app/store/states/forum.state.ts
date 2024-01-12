import { IPost } from "../../interfaces/post";
import { Injectable } from '@angular/core';
import { Action, State } from '@ngxs/store';
import { ForumActions } from "../actions/forum.actions";
import { StateContext } from "@ngxs/store";

@State<IPost[]>({
     name: "forum",
     defaults: []
})
@Injectable()
export class ForumState{
     @Action(ForumActions.AddPost)
     addPost(ctx: StateContext<IPost[]>,item: ForumActions.AddPost){
          const state = ctx.getState();
          state.push(item.post);
          ctx.setState([...state]);
     }
     @Action(ForumActions.UpvotePost)
     upvotePost(ctx: StateContext<IPost[]>,item: ForumActions.UpvotePost){
          const state = ctx.getState();
          state[item.i].points += 1;
          ctx.setState([...state]);
     }
     @Action(ForumActions.DownvotePost)
     downvotePost(ctx: StateContext<IPost[]>,item: ForumActions.DownvotePost){
          const state = ctx.getState();
          state[item.i].points -= 1;
          ctx.setState([...state]);
     }
}