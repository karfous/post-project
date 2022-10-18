// export let test = "ahoj";
export let prepareModels = []; // this is the source for angular models

export let posts = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (data) => data.json()
);
export let users = fetch("https://jsonplaceholder.typicode.com/users").then(
  (data) => data.json()
);
export let comments = fetch(
  "https://jsonplaceholder.typicode.com/comments"
).then((data) => data.json());

let promiseArray = [posts, users, comments];

Promise.allSettled(promiseArray).then((results) => {
  results[0].value.forEach((post) => {
    // preparing models from different sources
    post.bodyShort = post.body.slice(0, 100) + "...";
    post.user = results[1].value.find((user) => user.id == post.userId).name; //TODO no verification here! bug potential
    post.comments = results[2].value.filter(
      // bug potentials
      (comment) => comment.postId == post.id
    );
    prepareModels.push(post);
  });
});
