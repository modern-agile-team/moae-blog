export interface PostType {
  context: string;
  createdAt: string;
  id: number;
  title: string;
  updatedAt: string;
  userId: number;
  user: { name: string; baseUrl: string };
  categories: string[];
}

export type CreatePostType = Pick<PostType, "categories" | "context" | "title">;
