import {IUser} from './User'

export interface IComment {
  id: string;
  image: string;
  name: string;
  user: IUser
  replies: Array<IComment>;
  text: string;
  isLiked: boolean;
  date: Date;
}