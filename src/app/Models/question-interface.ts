export interface Question {
  id: number;
  text: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  subtopics: string[];
  options:string[];
  correctAnswerIndex:number;
}

export interface QuestionGroup{
    courseName:string;
    questions:Question[]
}

