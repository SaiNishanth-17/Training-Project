export interface Question {
  id: number;
  text: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  options:string[];
  correctAnswerIndex:number;
}

export interface QuestionGroup{
    courseName:string;
    questions:Question[]
}

