export interface CommentListType {
  commentList: CommentType[] | [];
}

export interface CommentType {
  id: string;
  img: string;
  name: string;
  date: string;
  description: string;
}
