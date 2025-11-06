export interface Question {
  id: number;
  text: string;
  difficulty: 'basic' | 'intermediate' | 'advanced';
  options:string[];
  correctAnswer:string;
}

export interface QuestionGroup{
    courseName:string;
    questions:Question[]
}

