// export let test = "ahoj";
export let prepareModels = [
  {
    id: 101,
    title: "Ono to žije!",
    user: "Jakub Kareš",
    body: "Dalo to práci a musel jsem to trochu ohýbat, ale nakonec to funguje. Uf :)",
    bodyShort:
      "Byla to fuška, pár dní jsem moc nespal a v Angularu hledal jen to, co pravděpodobně potřebuji na zpracování úlohy. No nějak začít musím :)",
    comments: [
      {
        postId: 101,
        id: 1,
        name: "Hlavně neaktualizovat detail příspěvku",
        email: "jakub.kares@gmail.com",
        body: "Data předávám pomocí routu, ale aktualizací o ně přijdu. Ve snapshotu údaj o id je, takže špatně aktualizuji komponentu? S tím souvisí i přechod na komponentu přímo přes URL. TO také bohužel nefunguje :(",
      },
      {
        postId: 101,
        id: 2,
        name: "Ach ten typescript",
        email: "jakub.kares@gmail.com",
        body: "Data jsem si musel fetchnout pomocí javascriptu, protože jsem bojoval se striktními pravidly definování proměnných. Aspoň je co studovat.",
      },
      {
        postId: 101,
        id: 3,
        name: "Architektura je teda bídná",
        email: "jakub.kares@gmail.com",
        body: "Architektura není nic moc. Tak uvidíme.",
      },
    ],
  },
]; // this is the source for angular models

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
  console.log(prepareModels);
});
