export interface completedExams{
  id: number,
  name: string,
  noOfQuestions?:number,
  duration: string,
  status: 'completed' | 'not-completed',
  score?:number
}

