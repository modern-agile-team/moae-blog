export interface PostType {
  id: string;
  title: string;
  description: string;
  date: string;
  writer: string;
  tags: string[];
  likes: number;
  previewImage?: string;
}
