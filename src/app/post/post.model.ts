export class PostModel {
    public title: string;
    public user: string;
    public id: string;
    public body: string;
    public bodyShort: string;
    public comments: string[]; //array of strings

    constructor(fetchedModel: any){
        this.title = fetchedModel.title
        this.user = fetchedModel.user;
        this.id = fetchedModel.id;
        this.body = fetchedModel.body;
        this.comments = fetchedModel.comments;
        this.bodyShort = fetchedModel.bodyShort;
    }
}