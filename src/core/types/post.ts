import { UserType } from "./user";

export interface PostType {
  context: string;
  createdAt: string;
  id: number;
  title: string;
  updatedAt: string;
  userId: number;
  user: UserType;
  categories: string[];
  thumbnail?: string;
}

export type CreatePostType = Pick<PostType, "categories" | "context" | "title" | "thumbnail">;
