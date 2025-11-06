export interface Question {
    id: number,
    text: string,
    options: string[],
    correctAnswer: string,
    difficulty: 'basic' | 'intermediate' | 'advanced',
}