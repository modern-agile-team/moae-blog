import { UserType } from "./user";

export type CategoryType = {
  boardId: number;
  categoryId: number;
  category: {
    createdAt: string;
    id: number;
    name: string;
  };
};

export interface PostType {
  context: string;
  createdAt: string;
  id: number;
  title: string;
  updatedAt: string;
  userId: number;
  user: UserType;
  categories: CategoryType[];
  thumbnail?: string;
}

export type CreatePostType = Pick<PostType, "categories" | "context" | "title" | "thumbnail">;
