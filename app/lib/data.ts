// types
type POST = {
  id: string;
  title: string;
  desc: string;
  date: Date;
};

// store
let posts: POST[] = [
  {
    id: "1713893708281",
    title: "This is a my 5 post",
    desc: "Post content",
    date: "2024-04-23T17:35:08.281Z",
  },
];

//handlers
export const getPosts = () => posts;

export const addPosts = (post: POST) => {
  posts.push(post);
};

export const deletePosts = (id: string) => {
  posts = posts.filter((post) => post.id !== id);
};

export const updatePosts = (id: string, title: string, desc: string) => {
  const post = posts.find((post) => post.id === id);
  if (post) {
    post.title = title;
    post.desc = desc;
  } else {
    throw new Error("NO POST FOUND");
  }
};

export const getById = (id: string) => {
  return posts.find((post) => post.id === id);
};
