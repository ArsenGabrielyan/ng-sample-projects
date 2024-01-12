import {IPost} from "../../interfaces/post";

export namespace ForumActions{
     export class AddPost{
          static readonly type = '[FORUM] Add Post';
          constructor(public post: IPost){}
     }
     export class UpvotePost{
          static readonly type = '[FORUM] Upvote Post';
          constructor(public i:number){}
     }
     export class DownvotePost{
          static readonly type = '[FORUM] Downvote Post';
          constructor(public i:number){}
     }
}