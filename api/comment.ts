import { Error, ObjectId } from "mongoose";
import Comment, { IComment } from "../models/comment";

type tComment = IComment | null;
// type tComments = IComment[];

const createComment = async (comment: IComment): Promise<tComment> => {
  const data: IComment = await Comment.create(comment);
  return data;
};

export default { createComment };
