export interface CommentListType {
  commentList: CommentType[] | [];
}

export interface CommentType {
  boardId: number;
  context: string;
  createdAt: string;
  id: number;
  updatedAt: string;
  userId: number;
}
