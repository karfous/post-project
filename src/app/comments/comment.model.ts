export class CommentModel {
    public postId: string;
    public name: string;
    public id: number;
    public body: string;
    public email: string;
    

    constructor(comment: any){
        this.name = comment.name;
        this.id = comment.id;
        this.body = comment.body;
        this.postId = comment.postId;
        
    }
}