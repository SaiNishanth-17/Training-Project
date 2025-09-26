

export interface Exam {
    id: number,
    name: string,
    noOfTopics: number,
    topics: string[],
    noOfStudents: number,
    date?: Date
}