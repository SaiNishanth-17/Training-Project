import { Injectable } from '@angular/core';
import { QuestionGroup, Question } from '../Models/question-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class QuestionbankServices {
    constructor(private http: HttpClient) {}
  courses: { name: string }[] = [
    { name: 'Maths' },
    { name: 'Science' },
    { name: 'Social' },
    { name: 'English' },
  ];

  newQuestion!: QuestionGroup;

  questionsByCourse: QuestionGroup[] = [
    {
      courseName: 'Maths',
      questions: [
        {
          id: 1,
          text: 'What is 2 + 2?',
          difficulty: 'Beginner',
          options: ['3', '4', '5', '6'],
          correctAnswer: '4',
        },
        {
          id: 2,
          text: 'What is 5 - 3?',
          difficulty: 'Beginner',
          options: ['2', '3', '4', '5'],
          correctAnswer: '2',
        },
        {
          id: 3,
          text: 'What is 3 * 3?',
          difficulty: 'Beginner',
          options: ['6', '7', '8', '9'],
          correctAnswer: '9',
        },
        {
          id: 4,
          text: 'What is 10 / 2?',
          difficulty: 'Beginner',
          options: ['3', '4', '5', '6'],
          correctAnswer: '5',
        },
        {
          id: 5,
          text: 'What is the square root of 16?',
          difficulty: 'Beginner',
          options: ['2', '3', '4', '5'],
          correctAnswer: '4',
        },
        {
          id: 6,
          text: 'What is 15% of 200?',
          difficulty: 'Beginner',
          options: ['20', '25', '30', '35'],
          correctAnswer: '25',
        },
        {
          id: 7,
          text: 'If a triangle has angles of 90 and 60 degrees, what is the third angle?',
          difficulty: 'Beginner',
          options: ['30', '60', '90', '120'],
          correctAnswer: '30',
        },
        {
          id: 8,
          text: 'What is the value of Pi (π) to two decimal places?',
          difficulty: 'Beginner',
          options: ['3.12', '3.14', '3.16', '3.18'],
          correctAnswer: '3.14',
        },
        {
          id: 9,
          text: 'What is the next prime number after 7?',
          difficulty: 'Beginner',
          options: ['8', '9', '10', '11'],
          correctAnswer: '11',
        },
        {
          id: 10,
          text: 'What is the least common multiple (LCM) of 4 and 5?',
          difficulty: 'Beginner',
          options: ['10', '15', '20', '25'],
          correctAnswer: '20',
        },
        {
          id: 41,
          text: 'What is 12 × 12?',
          difficulty: 'Intermediate',
          options: ['124', '144', '134', '154'],
          correctAnswer: '144',
        },
        {
          id: 42,
          text: 'Solve for x: 2x + 3 = 11',
          difficulty: 'Intermediate',
          options: ['3', '4', '5', '6'],
          correctAnswer: '4',
        },
        {
          id: 43,
          text: 'What is the area of a circle with radius 7 (use π ≈ 3.14)?',
          difficulty: 'Intermediate',
          options: ['153.86', '140.5', '176.5', '196.0'],
          correctAnswer: '153.86',
        },
        {
          id: 44,
          text: 'Find one root of x^2 - 5x + 6 = 0',
          difficulty: 'Advanced',
          options: ['2', '3', '1', '4'],
          correctAnswer: '2',
        },
        {
          id: 45,
          text: 'What is the derivative of x^2 with respect to x?',
          difficulty: 'Advanced',
          options: ['x', '2x', 'x^2', '2'],
          correctAnswer: '2x',
        },
        {
          id: 46,
          text: 'How many ways to choose 2 items from 5 (combinations)?',
          difficulty: 'Advanced',
          options: ['10', '20', '5', '15'],
          correctAnswer: '10',
        },
      ],
    },
    {
      courseName: 'Science',
      questions: [
        {
          id: 11,
          text: 'Which gas do plants use for photosynthesis?',
          difficulty: 'Beginner',
          options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
          correctAnswer: 'Carbon Dioxide',
        },
        {
          id: 12,
          text: 'What is the chemical symbol for water?',
          difficulty: 'Beginner',
          options: ['HO', 'H2O', 'O2', 'CO2'],
          correctAnswer: 'H2O',
        },
        {
          id: 13,
          text: 'What is the atomic number of carbon?',
          difficulty: 'Beginner',
          options: ['6', '12', '14', '16'],
          correctAnswer: '6',
        },
        {
          id: 14,
          text: 'Which planet is closest to the sun?',
          difficulty: 'Beginner',
          options: ['Earth', 'Mars', 'Mercury', 'Venus'],
          correctAnswer: 'Mercury',
        },
        {
          id: 15,
          text: "What is the most abundant gas in Earth's atmosphere?",
          difficulty: 'Beginner',
          options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
          correctAnswer: 'Nitrogen',
        },
        {
          id: 16,
          text: 'What is the chemical formula for methane?',
          difficulty: 'Beginner',
          options: ['CH4', 'C2H6', 'CO2', 'H2O'],
          correctAnswer: 'CH4',
        },
        {
          id: 17,
          text: 'Which organelle is known as the powerhouse of the cell?',
          difficulty: 'Beginner',
          options: ['Nucleus', 'Mitochondria', 'Chloroplast', 'Endoplasmic Reticulum'],
          correctAnswer: 'Mitochondria',
        },
        {
          id: 18,
          text: 'What is the pH level of pure water?',
          difficulty: 'Beginner',
          options: ['0', '7', '14', '21'],
          correctAnswer: '7',
        },
        {
          id: 19,
          text: 'Which vitamin is produced when a person is exposed to sunlight?',
          difficulty: 'Beginner',
          options: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'],
          correctAnswer: 'Vitamin D',
        },
        {
          id: 20,
          text: 'What is the most widely spoken language in the world?',
          difficulty: 'Beginner',
          options: ['English', 'Mandarin', 'Spanish', 'Hindi'],
          correctAnswer: 'Mandarin',
        },
        {
          id: 47,
          text: 'What is the chemical name for table salt?',
          difficulty: 'Intermediate',
          options: [
            'Sodium Chloride',
            'Potassium Chloride',
            'Sodium Carbonate',
            'Calcium Chloride',
          ],
          correctAnswer: 'Sodium Chloride',
        },
        {
          id: 48,
          text: 'Which organ system transports oxygen and nutrients around the body?',
          difficulty: 'Intermediate',
          options: [
            'Digestive system',
            'Nervous system',
            'Circulatory system',
            'Respiratory system',
          ],
          correctAnswer: 'Circulatory system',
        },
        {
          id: 49,
          text: 'What is the primary function of chlorophyll in plants?',
          difficulty: 'Intermediate',
          options: [
            'Absorb minerals',
            'Absorb light for photosynthesis',
            'Store water',
            'Support structure',
          ],
          correctAnswer: 'Absorb light for photosynthesis',
        },
        {
          id: 50,
          text: 'What particle has a negative charge and orbits the nucleus?',
          difficulty: 'Advanced',
          options: ['Proton', 'Electron', 'Neutron', 'Photon'],
          correctAnswer: 'Electron',
        },
        {
          id: 51,
          text: 'Which law states that for every action there is an equal and opposite reaction?',
          difficulty: 'Advanced',
          options: ["Newton's First", "Newton's Second", "Newton's Third", 'Law of Gravitation'],
          correctAnswer: "Newton's Third",
        },
        {
          id: 52,
          text: 'What is the pH of a strong acid (less than)?',
          difficulty: 'Advanced',
          options: ['7', '0-3', '8-10', '5-6'],
          correctAnswer: '0-3',
        },
      ],
    },
    {
      courseName: 'Social',
      questions: [
        {
          id: 21,
          text: 'Who was the first President of the United States?',
          difficulty: 'Beginner',
          options: ['George Washington', 'Abraham Lincoln', 'Thomas Jefferson', 'John Adams'],
          correctAnswer: 'George Washington',
        },
        {
          id: 22,
          text: 'In which year did the Titanic sink?',
          difficulty: 'Beginner',
          options: ['1912', '1914', '1916', '1918'],
          correctAnswer: '1912',
        },
        {
          id: 23,
          text: 'Who wrote the Declaration of Independence?',
          difficulty: 'Beginner',
          options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John Adams'],
          correctAnswer: 'Thomas Jefferson',
        },
        {
          id: 24,
          text: 'Which war was fought between the North and South regions in the United States?',
          difficulty: 'Beginner',
          options: ['World War I', 'World War II', 'The Civil War', 'The Revolutionary War'],
          correctAnswer: 'The Civil War',
        },
        {
          id: 25,
          text: 'Who was the first woman to fly solo across the Atlantic Ocean?',
          difficulty: 'Beginner',
          options: ['Amelia Earhart', 'Harriet Quimby', 'Jacqueline Cochran', 'Bessie Coleman'],
          correctAnswer: 'Amelia Earhart',
        },
        {
          id: 26,
          text: 'What is the capital of France?',
          difficulty: 'Beginner',
          options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
          correctAnswer: 'Paris',
        },
        {
          id: 27,
          text: 'Which continent is the Sahara Desert located on?',
          difficulty: 'Beginner',
          options: ['Asia', 'Africa', 'North America', 'Australia'],
          correctAnswer: 'Africa',
        },
        {
          id: 28,
          text: 'What is the largest ocean on Earth?',
          difficulty: 'Beginner',
          options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
          correctAnswer: 'Pacific Ocean',
        },
        {
          id: 29,
          text: 'Which country is both an island and a continent?',
          difficulty: 'Beginner',
          options: ['Australia', 'Japan', 'United Kingdom', 'New Zealand'],
          correctAnswer: 'Australia',
        },
        {
          id: 30,
          text: 'What is the capital city of Japan?',
          difficulty: 'Beginner',
          options: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'],
          correctAnswer: 'Tokyo',
        },
        {
          id: 53,
          text: 'Who was the main author of the United States Constitution?',
          difficulty: 'Intermediate',
          options: ['George Washington', 'James Madison', 'Thomas Jefferson', 'Benjamin Franklin'],
          correctAnswer: 'James Madison',
        },
        {
          id: 54,
          text: 'What is GDP a measure of?',
          difficulty: 'Intermediate',
          options: ['Population', 'Economic output', 'Area', 'Life expectancy'],
          correctAnswer: 'Economic output',
        },
        {
          id: 55,
          text: 'Which treaty ended World War I?',
          difficulty: 'Intermediate',
          options: ['Treaty of Versailles', 'Treaty of Paris', 'Treaty of Ghent', 'Treaty of Rome'],
          correctAnswer: 'Treaty of Versailles',
        },
        {
          id: 56,
          text: 'What year did the Berlin Wall fall?',
          difficulty: 'Advanced',
          options: ['1987', '1989', '1991', '1993'],
          correctAnswer: '1989',
        },
        {
          id: 57,
          text: 'Which economic system is characterized by private ownership and market allocation?',
          difficulty: 'Advanced',
          options: ['Communism', 'Socialism', 'Capitalism', 'Feudalism'],
          correctAnswer: 'Capitalism',
        },
        {
          id: 58,
          text: 'Which philosophical movement emphasized reason and individualism during the 17-18th centuries?',
          difficulty: 'Advanced',
          options: ['Romanticism', 'Enlightenment', 'Renaissance', 'Realism'],
          correctAnswer: 'Enlightenment',
        },
      ],
    },
    {
      courseName: 'English',
      questions: [
        {
          id: 31,
          text: 'Choose the correct plural of "mouse".',
          difficulty: 'Beginner',
          options: ['mouses', 'mice', 'mousees', 'meese'],
          correctAnswer: 'mice',
        },
        {
          id: 32,
          text: 'What is the past tense of "go"?',
          difficulty: 'Beginner',
          options: ['goed', 'went', 'going', 'gone'],
          correctAnswer: 'went',
        },
        {
          id: 33,
          text: 'Which word is a synonym of "happy"?',
          difficulty: 'Beginner',
          options: ['Sad', 'Angry', 'Joyful', 'Tired'],
          correctAnswer: 'Joyful',
        },
        {
          id: 34,
          text: 'What is the antonym of "difficult"?',
          difficulty: 'Beginner',
          options: ['Beginner', 'Advanced', 'Challenging', 'Simple'],
          correctAnswer: 'Beginner',
        },
        {
          id: 35,
          text: 'Which sentence is correct?',
          difficulty: 'Beginner',
          options: [
            "She don't like ice cream.",
            "She doesn't likes ice cream.",
            "She doesn't like ice cream.",
            'She not like ice cream.',
          ],
          correctAnswer: "She doesn't like ice cream.",
        },
        {
          id: 36,
          text: 'What is the main idea of a story?',
          difficulty: 'Beginner',
          options: [
            'The sequence of events.',
            'The characters in the story.',
            'The central point or message.',
            'The time and place of the story.',
          ],
          correctAnswer: 'The central point or message.',
        },
        {
          id: 37,
          text: 'Which of these is a metaphor?',
          difficulty: 'Beginner',
          options: [
            'The classroom was a zoo.',
            'He runs like the wind.',
            'She is as brave as a lion.',
            'All of the above.',
          ],
          correctAnswer: 'The classroom was a zoo.',
        },
        {
          id: 38,
          text: 'What do we call the repetition of consonant sounds at the beginning of words?',
          difficulty: 'Beginner',
          options: ['Alliteration', 'Assonance', 'Consonance', 'Onomatopoeia'],
          correctAnswer: 'Alliteration',
        },
        {
          id: 39,
          text: 'Which of the following is an example of personification?',
          difficulty: 'Beginner',
          options: [
            'The wind whispered through the trees.',
            'He is a lion in battle.',
            'Her smile is a ray of sunshine.',
            'All of the above.',
          ],
          correctAnswer: 'The wind whispered through the trees.',
        },
        {
          id: 40,
          text: 'What is the term for the main character in a story?',
          difficulty: 'Advanced',
          options: ['Protagonist', 'Antagonist', 'Narrator', 'Character foil'],
          correctAnswer: 'Protagonist',
        },
        {
          id: 59,
          text: 'Which sentence uses the past perfect tense?',
          difficulty: 'Intermediate',
          options: [
            'I had finished my work before dinner.',
            'I finish my work yesterday.',
            'I have finish my work.',
            'I will have finished it.',
          ],
          correctAnswer: 'I had finished my work before dinner.',
        },
        {
          id: 60,
          text: 'Choose the synonym of "rapid".',
          difficulty: 'Intermediate',
          options: ['Slow', 'Quick', 'Calm', 'Lazy'],
          correctAnswer: 'Quick',
        },
        {
          id: 61,
          text: 'What is an example of an oxymoron?',
          difficulty: 'Intermediate',
          options: ['Bittersweet', 'Happy', 'Sunny', 'Brave'],
          correctAnswer: 'Bittersweet',
        },
        {
          id: 62,
          text: 'Which literary device involves giving human traits to non-human things?',
          difficulty: 'Advanced',
          options: ['Metaphor', 'Personification', 'Alliteration', 'Hyperbole'],
          correctAnswer: 'Personification',
        },
        {
          id: 63,
          text: 'Identify the passive voice: "The cake was eaten by the children." What is the active version?',
          difficulty: 'Advanced',
          options: [
            'The children ate the cake.',
            'The cake ate the children.',
            'The children were eating cake.',
            'The cake had been eaten.',
          ],
          correctAnswer: 'The children ate the cake.',
        },
        {
          id: 64,
          text: 'Which of these is a characteristic of modernist literature?',
          difficulty: 'Advanced',
          options: [
            'Strict moral lessons',
            'Stream of consciousness',
            'Epic hero',
            'Romantic idealism',
          ],
          correctAnswer: 'Stream of consciousness',
        },
      ],
    },
  ];
  private nextId: number = 65;

  getQuestionsForCourse(selectedCourse: string): Question[] {
    const courseGroup = this.questionsByCourse.find((group) => group.courseName === selectedCourse);
    return courseGroup!.questions || [];
  }

  filteredQuestions(
    questions: Question[],
    filterDifficulty: string,
    searchText: string
  ): Question[] {
    let filtered = [...questions];

    if (filterDifficulty !== 'All') {
      filtered = filtered.filter((q) => q.difficulty === filterDifficulty);
    }

    if (searchText.trim()) {
      filtered = filtered.filter(
        (q) =>
          q.text.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    return filtered;
  }

  saveQuestion(updatedQuestion: Question, selectedCourseName: string): void {
    const courseGroup = this.questionsByCourse.find(
      (course) => course.courseName === selectedCourseName
    );

    if (courseGroup) {
      const index = courseGroup.questions.findIndex((q) => q.id === updatedQuestion.id);
      if (index !== -1) {
        courseGroup.questions[index] = { ...updatedQuestion };
      }
    }
  }

  deleteQuestion(id: number, courseName: string): void {
    const courseGroup = this.questionsByCourse.find((group) => group.courseName === courseName);
    if (courseGroup) {
      courseGroup.questions = courseGroup.questions.filter((q) => q.id !== id);
    }
  }

  deepCloneQuestion(question: Question): Question {
    return {
      id: question.id,
      text: question.text,
      difficulty: question.difficulty,
      options: [...question.options],
      correctAnswer: question.correctAnswer,
    } as Question;
  }

  addCourse(name: string): void {
    if (!this.courses.some((c) => c.name.toLowerCase() === name.toLowerCase())) {
      this.courses.push({ name: name });
    }
    const existingGroup = this.questionsByCourse.find(
      (group) => group.courseName.toLowerCase() === name.toLowerCase()
    );
    if (!existingGroup) {
      this.questionsByCourse.push({
        courseName: name,
        questions: [],
      });
    }
  }

  addQuestion(newQuestion: Question, selectedCourseName: string): void {
    const courseGroup = this.questionsByCourse.find(
      (group) => group.courseName === selectedCourseName
    );
    if (courseGroup) {
      newQuestion.id = this.nextId++;
      courseGroup.questions.push(newQuestion);
    }
  }

  deleteCourse(name: string) {
    this.courses = this.courses.filter((c) => c.name !== name);
    this.questionsByCourse = this.questionsByCourse.filter((g) => g.courseName !== name);
  }

getQuestionsForExamLevel(subjectName: string, level: string): Observable<any[]> {
  return this.http.get<any[]>(`http://localhost:8001/api/questions/${subjectName}/${level}`);
}


}