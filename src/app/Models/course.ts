import { Exam } from "./studentExam";

export interface Course {
  id: number;
  name: string;
  author: string;
  duration: string;
  topics: string[];
  exams?: Exam[];
}

