export interface Subtopic {
  name: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  isActive: boolean;
}


export interface ExamTopicType {
  subjectName: string;
  description: string;
  isActive: boolean;
  subtopics?: any[];
}

