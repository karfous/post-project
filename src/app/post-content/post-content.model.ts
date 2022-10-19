export class PostContentModel {
    public title: string;
    public user: string;
    public id: string;
    public body: string;
    public comments: string[]; //array of strings

    constructor(clickedPostModel: any){
        // this.title = fetchedModel
        this.title = clickedPostModel.title
        this.user = clickedPostModel.user;
        this.id = clickedPostModel.id;
        this.body = clickedPostModel.body;
        this.comments = clickedPostModel.comments;
        
    }
}