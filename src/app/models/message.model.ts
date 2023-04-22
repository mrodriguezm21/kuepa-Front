interface Lesson {
  _id: string;
  user: string;
  subject: string;
}

interface User {
  _id: string;
  username: string;
  name: string;
  rol: number;
}

export interface Message {
  _id: string;
  lesson: Lesson;
  user: User;
  content: string;
  createdAt: string;
}
