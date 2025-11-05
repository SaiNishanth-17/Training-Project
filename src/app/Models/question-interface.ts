export interface Question {
  id: number;
  text: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  options:string[];
  correctAnswer:string;
}

export interface QuestionGroup{
    courseName:string;
    questions:Question[]
}

