export interface Subtopic {
  name: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  isActive: boolean;
}


export interface ExamTopicType {
  name: string;
  isActive: boolean;
  Description: string;
  subtopics?: Subtopic[]; 
}
