export interface Commentary {
  id: string;
  image: string;
  name: string;
  replies: Array<Object>;
  comment: string;
  isLiked: boolean;
  date: Date
}