export interface Question {
    id: number,
    text: string,
    options: string[],
    correctAnswerIndex: number,
    difficulty: 'Easy' | 'Medium' | 'Hard',
    subtopics: string[],
}