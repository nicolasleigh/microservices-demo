export type Post = {
  id: {
    id: string;
    title: string;
    comments: Comment[];
  };
};

export type Comment = {
  id: string;
  content: string;
};
