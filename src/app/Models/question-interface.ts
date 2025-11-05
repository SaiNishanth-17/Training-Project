export interface Question {
  id: number;
  text: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  options:string[];
  correctAnswer:string;
}

export interface QuestionGroup{
    courseName:string;
    questions:Question[]
}

