import { Injectable } from '@angular/core';
import { QuestionGroup, Question } from '../Models/question-interface';
@Injectable({
  providedIn: 'root',
})
export class QuestionbankServices {
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
        // Easy (existing)
        {
          id: 1,
          text: 'What is 2 + 2?',
          difficulty: 'Easy',
          subtopics: ['Arithmetic'],
          options: ['3', '4', '5', '6'],
          correctAnswerIndex: 1,
        },
        {
          id: 2,
          text: 'What is 5 - 3?',
          difficulty: 'Easy',
          subtopics: ['Arithmetic'],
          options: ['2', '3', '4', '5'],
          correctAnswerIndex: 0,
        },
        {
          id: 3,
          text: 'What is 3 * 3?',
          difficulty: 'Easy',
          subtopics: ['Arithmetic'],
          options: ['6', '7', '8', '9'],
          correctAnswerIndex: 3,
        },
        {
          id: 4,
          text: 'What is 10 / 2?',
          difficulty: 'Easy',
          subtopics: ['Arithmetic'],
          options: ['3', '4', '5', '6'],
          correctAnswerIndex: 2,
        },
        {
          id: 5,
          text: 'What is the square root of 16?',
          difficulty: 'Easy',
          subtopics: ['Geometry'],
          options: ['2', '3', '4', '5'],
          correctAnswerIndex: 2,
        },
        {
          id: 6,
          text: 'What is 15% of 200?',
          difficulty: 'Easy',
          subtopics: ['Percentage'],
          options: ['20', '25', '30', '35'],
          correctAnswerIndex: 1,
        },
        {
          id: 7,
          text: 'If a triangle has angles of 90 and 60 degrees, what is the third angle?',
          difficulty: 'Easy',
          subtopics: ['Geometry'],
          options: ['30', '60', '90', '120'],
          correctAnswerIndex: 0,
        },
        {
          id: 8,
          text: 'What is the value of Pi (π) to two decimal places?',
          difficulty: 'Easy',
          subtopics: ['Geometry'],
          options: ['3.12', '3.14', '3.16', '3.18'],
          correctAnswerIndex: 1,
        },
        {
          id: 9,
          text: 'What is the next prime number after 7?',
          difficulty: 'Easy',
          subtopics: ['Number Theory'],
          options: ['8', '9', '10', '11'],
          correctAnswerIndex: 3,
        },
        {
          id: 10,
          text: 'What is the least common multiple (LCM) of 4 and 5?',
          difficulty: 'Easy',
          subtopics: ['Multiples'],
          options: ['10', '15', '20', '25'],
          correctAnswerIndex: 0,
        },
        // Medium
        {
          id: 41,
          text: 'What is 12 × 12?',
          difficulty: 'Medium',
          subtopics: ['Multiplication'],
          options: ['124', '144', '134', '154'],
          correctAnswerIndex: 1,
        },
        {
          id: 42,
          text: 'Solve for x: 2x + 3 = 11',
          difficulty: 'Medium',
          subtopics: ['Algebra'],
          options: ['3', '4', '5', '6'],
          correctAnswerIndex: 1,
        },
        {
          id: 43,
          text: 'What is the area of a circle with radius 7 (use π ≈ 3.14)?',
          difficulty: 'Medium',
          subtopics: ['Geometry'],
          options: ['153.86', '140.5', '176.5', '196.0'],
          correctAnswerIndex: 0,
        },
        // Hard
        {
          id: 44,
          text: 'Find one root of x^2 - 5x + 6 = 0',
          difficulty: 'Hard',
          subtopics: ['Algebra'],
          options: ['2', '3', '1', '4'],
          correctAnswerIndex: 0,
        },
        {
          id: 45,
          text: 'What is the derivative of x^2 with respect to x?',
          difficulty: 'Hard',
          subtopics: ['Calculus'],
          options: ['x', '2x', 'x^2', '2'],
          correctAnswerIndex: 1,
        },
        {
          id: 46,
          text: 'How many ways to choose 2 items from 5 (combinations)?',
          difficulty: 'Hard',
          subtopics: ['Combinatorics'],
          options: ['10', '20', '5', '15'],
          correctAnswerIndex: 0,
        },
      ],
    },
    {
      courseName: 'Science',
      questions: [
        // Easy (existing)
        {
          id: 11,
          text: 'Which gas do plants use for photosynthesis?',
          difficulty: 'Easy',
          subtopics: ['Biology'],
          options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
          correctAnswerIndex: 2,
        },
        {
          id: 12,
          text: 'What is the chemical symbol for water?',
          difficulty: 'Easy',
          subtopics: ['Chemistry'],
          options: ['HO', 'H2O', 'O2', 'CO2'],
          correctAnswerIndex: 1,
        },
        {
          id: 13,
          text: 'What is the atomic number of carbon?',
          difficulty: 'Easy',
          subtopics: ['Chemistry'],
          options: ['6', '12', '14', '16'],
          correctAnswerIndex: 0,
        },
        {
          id: 14,
          text: 'Which planet is closest to the sun?',
          difficulty: 'Easy',
          subtopics: ['Astronomy'],
          options: ['Earth', 'Mars', 'Mercury', 'Venus'],
          correctAnswerIndex: 2,
        },
        {
          id: 15,
          text: "What is the most abundant gas in Earth's atmosphere?",
          difficulty: 'Easy',
          subtopics: ['Earth Science'],
          options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
          correctAnswerIndex: 2,
        },
        {
          id: 16,
          text: 'What is the chemical formula for methane?',
          difficulty: 'Easy',
          subtopics: ['Chemistry'],
          options: ['CH4', 'C2H6', 'CO2', 'H2O'],
          correctAnswerIndex: 0,
        },
        {
          id: 17,
          text: 'Which organelle is known as the powerhouse of the cell?',
          difficulty: 'Easy',
          subtopics: ['Cell Biology'],
          options: ['Nucleus', 'Mitochondria', 'Chloroplast', 'Endoplasmic Reticulum'],
          correctAnswerIndex: 1,
        },
        {
          id: 18,
          text: 'What is the pH level of pure water?',
          difficulty: 'Easy',
          subtopics: ['Chemistry'],
          options: ['0', '7', '14', '21'],
          correctAnswerIndex: 1,
        },
        {
          id: 19,
          text: 'Which vitamin is produced when a person is exposed to sunlight?',
          difficulty: 'Easy',
          subtopics: ['Biology'],
          options: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'],
          correctAnswerIndex: 3,
        },
        {
          id: 20,
          text: 'What is the most widely spoken language in the world?',
          difficulty: 'Easy',
          subtopics: ['Linguistics'],
          options: ['English', 'Mandarin', 'Spanish', 'Hindi'],
          correctAnswerIndex: 1,
        },
        // Medium
        {
          id: 47,
          text: 'What is the chemical name for table salt?',
          difficulty: 'Medium',
          subtopics: ['Chemistry'],
          options: [
            'Sodium Chloride',
            'Potassium Chloride',
            'Sodium Carbonate',
            'Calcium Chloride',
          ],
          correctAnswerIndex: 0,
        },
        {
          id: 48,
          text: 'Which organ system transports oxygen and nutrients around the body?',
          difficulty: 'Medium',
          subtopics: ['Biology'],
          options: [
            'Digestive system',
            'Nervous system',
            'Circulatory system',
            'Respiratory system',
          ],
          correctAnswerIndex: 2,
        },
        {
          id: 49,
          text: 'What is the primary function of chlorophyll in plants?',
          difficulty: 'Medium',
          subtopics: ['Biology'],
          options: [
            'Absorb minerals',
            'Absorb light for photosynthesis',
            'Store water',
            'Support structure',
          ],
          correctAnswerIndex: 1,
        },
        // Hard
        {
          id: 50,
          text: 'What particle has a negative charge and orbits the nucleus?',
          difficulty: 'Hard',
          subtopics: ['Atomic Structure'],
          options: ['Proton', 'Electron', 'Neutron', 'Photon'],
          correctAnswerIndex: 1,
        },
        {
          id: 51,
          text: 'Which law states that for every action there is an equal and opposite reaction?',
          difficulty: 'Hard',
          subtopics: ['Physics'],
          options: ["Newton's First", "Newton's Second", "Newton's Third", 'Law of Gravitation'],
          correctAnswerIndex: 2,
        },
        {
          id: 52,
          text: 'What is the pH of a strong acid (less than)?',
          difficulty: 'Hard',
          subtopics: ['Chemistry'],
          options: ['7', '0-3', '8-10', '5-6'],
          correctAnswerIndex: 1,
        },
      ],
    },
    {
      courseName: 'Social',
      questions: [
        // Easy (existing)
        {
          id: 21,
          text: 'Who was the first President of the United States?',
          difficulty: 'Easy',
          subtopics: ['History'],
          options: ['George Washington', 'Abraham Lincoln', 'Thomas Jefferson', 'John Adams'],
          correctAnswerIndex: 0,
        },
        {
          id: 22,
          text: 'In which year did the Titanic sink?',
          difficulty: 'Easy',
          subtopics: ['History'],
          options: ['1912', '1914', '1916', '1918'],
          correctAnswerIndex: 0,
        },
        {
          id: 23,
          text: 'Who wrote the Declaration of Independence?',
          difficulty: 'Easy',
          subtopics: ['History'],
          options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John Adams'],
          correctAnswerIndex: 1,
        },
        {
          id: 24,
          text: 'Which war was fought between the North and South regions in the United States?',
          difficulty: 'Easy',
          subtopics: ['History'],
          options: ['World War I', 'World War II', 'The Civil War', 'The Revolutionary War'],
          correctAnswerIndex: 2,
        },
        {
          id: 25,
          text: 'Who was the first woman to fly solo across the Atlantic Ocean?',
          difficulty: 'Easy',
          subtopics: ['Aviation'],
          options: ['Amelia Earhart', 'Harriet Quimby', 'Jacqueline Cochran', 'Bessie Coleman'],
          correctAnswerIndex: 0,
        },
        {
          id: 26,
          text: 'What is the capital of France?',
          difficulty: 'Easy',
          subtopics: ['Geography'],
          options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
          correctAnswerIndex: 2,
        },
        {
          id: 27,
          text: 'Which continent is the Sahara Desert located on?',
          difficulty: 'Easy',
          subtopics: ['Geography'],
          options: ['Asia', 'Africa', 'North America', 'Australia'],
          correctAnswerIndex: 1,
        },
        {
          id: 28,
          text: 'What is the largest ocean on Earth?',
          difficulty: 'Easy',
          subtopics: ['Geography'],
          options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
          correctAnswerIndex: 3,
        },
        {
          id: 29,
          text: 'Which country is both an island and a continent?',
          difficulty: 'Easy',
          subtopics: ['Geography'],
          options: ['Australia', 'Japan', 'United Kingdom', 'New Zealand'],
          correctAnswerIndex: 0,
        },
        {
          id: 30,
          text: 'What is the capital city of Japan?',
          difficulty: 'Easy',
          subtopics: ['Geography'],
          options: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'],
          correctAnswerIndex: 2,
        },
        // Medium
        {
          id: 53,
          text: 'Who was the main author of the United States Constitution?',
          difficulty: 'Medium',
          subtopics: ['History'],
          options: ['George Washington', 'James Madison', 'Thomas Jefferson', 'Benjamin Franklin'],
          correctAnswerIndex: 1,
        },
        {
          id: 54,
          text: 'What is GDP a measure of?',
          difficulty: 'Medium',
          subtopics: ['Economics'],
          options: ['Population', 'Economic output', 'Area', 'Life expectancy'],
          correctAnswerIndex: 1,
        },
        {
          id: 55,
          text: 'Which treaty ended World War I?',
          difficulty: 'Medium',
          subtopics: ['History'],
          options: ['Treaty of Versailles', 'Treaty of Paris', 'Treaty of Ghent', 'Treaty of Rome'],
          correctAnswerIndex: 0,
        },
        // Hard
        {
          id: 56,
          text: 'What year did the Berlin Wall fall?',
          difficulty: 'Hard',
          subtopics: ['History'],
          options: ['1987', '1989', '1991', '1993'],
          correctAnswerIndex: 1,
        },
        {
          id: 57,
          text: 'Which economic system is characterized by private ownership and market allocation?',
          difficulty: 'Hard',
          subtopics: ['Economics'],
          options: ['Communism', 'Socialism', 'Capitalism', 'Feudalism'],
          correctAnswerIndex: 2,
        },
        {
          id: 58,
          text: 'Which philosophical movement emphasized reason and individualism during the 17-18th centuries?',
          difficulty: 'Hard',
          subtopics: ['Philosophy'],
          options: ['Romanticism', 'Enlightenment', 'Renaissance', 'Realism'],
          correctAnswerIndex: 1,
        },
      ],
    },
    {
      courseName: 'English',
      questions: [
        // Easy (existing)
        {
          id: 31,
          text: 'Choose the correct plural of "mouse".',
          difficulty: 'Easy',
          subtopics: ['Grammar'],
          options: ['mouses', 'mice', 'mousees', 'meese'],
          correctAnswerIndex: 1,
        },
        {
          id: 32,
          text: 'What is the past tense of "go"?',
          difficulty: 'Easy',
          subtopics: ['Grammar'],
          options: ['goed', 'went', 'going', 'gone'],
          correctAnswerIndex: 1,
        },
        {
          id: 33,
          text: 'Which word is a synonym of "happy"?',
          difficulty: 'Easy',
          subtopics: ['Vocabulary'],
          options: ['Sad', 'Angry', 'Joyful', 'Tired'],
          correctAnswerIndex: 2,
        },
        {
          id: 34,
          text: 'What is the antonym of "difficult"?',
          difficulty: 'Easy',
          subtopics: ['Vocabulary'],
          options: ['Easy', 'Hard', 'Challenging', 'Simple'],
          correctAnswerIndex: 0,
        },
        {
          id: 35,
          text: 'Which sentence is correct?',
          difficulty: 'Easy',
          subtopics: ['Grammar'],
          options: [
            "She don't like ice cream.",
            "She doesn't likes ice cream.",
            "She doesn't like ice cream.",
            'She not like ice cream.',
          ],
          correctAnswerIndex: 2,
        },
        {
          id: 36,
          text: 'What is the main idea of a story?',
          difficulty: 'Easy',
          subtopics: ['Literature'],
          options: [
            'The sequence of events.',
            'The characters in the story.',
            'The central point or message.',
            'The time and place of the story.',
          ],
          correctAnswerIndex: 2,
        },
        {
          id: 37,
          text: 'Which of these is a metaphor?',
          difficulty: 'Easy',
          subtopics: ['Figurative Language'],
          options: [
            'The classroom was a zoo.',
            'He runs like the wind.',
            'She is as brave as a lion.',
            'All of the above.',
          ],
          correctAnswerIndex: 0,
        },
        {
          id: 38,
          text: 'What do we call the repetition of consonant sounds at the beginning of words?',
          difficulty: 'Easy',
          subtopics: ['Figurative Language'],
          options: ['Alliteration', 'Assonance', 'Consonance', 'Onomatopoeia'],
          correctAnswerIndex: 0,
        },
        {
          id: 39,
          text: 'Which of the following is an example of personification?',
          difficulty: 'Easy',
          subtopics: ['Figurative Language'],
          options: [
            'The wind whispered through the trees.',
            'He is a lion in battle.',
            'Her smile is a ray of sunshine.',
            'All of the above.',
          ],
          correctAnswerIndex: 3,
        },
        {
          id: 40,
          text: 'What is the term for the main character in a story?',
          difficulty: 'Hard',
          subtopics: ['Literature'],
          options: ['Protagonist', 'Antagonist', 'Narrator', 'Character foil'],
          correctAnswerIndex: 0,
        },
        // Medium
        {
          id: 59,
          text: 'Which sentence uses the past perfect tense?',
          difficulty: 'Medium',
          subtopics: ['Grammar'],
          options: [
            'I had finished my work before dinner.',
            'I finish my work yesterday.',
            'I have finish my work.',
            'I will have finished it.',
          ],
          correctAnswerIndex: 0,
        },
        {
          id: 60,
          text: 'Choose the synonym of "rapid".',
          difficulty: 'Medium',
          subtopics: ['Vocabulary'],
          options: ['Slow', 'Quick', 'Calm', 'Lazy'],
          correctAnswerIndex: 1,
        },
        {
          id: 61,
          text: 'What is an example of an oxymoron?',
          difficulty: 'Medium',
          subtopics: ['Literature'],
          options: ['Bittersweet', 'Happy', 'Sunny', 'Brave'],
          correctAnswerIndex: 0,
        },
        // Hard
        {
          id: 62,
          text: 'Which literary device involves giving human traits to non-human things?',
          difficulty: 'Hard',
          subtopics: ['Literature'],
          options: ['Metaphor', 'Personification', 'Alliteration', 'Hyperbole'],
          correctAnswerIndex: 1,
        },
        {
          id: 63,
          text: 'Identify the passive voice: "The cake was eaten by the children." What is the active version?',
          difficulty: 'Hard',
          subtopics: ['Grammar'],
          options: [
            'The children ate the cake.',
            'The cake ate the children.',
            'The children were eating cake.',
            'The cake had been eaten.',
          ],
          correctAnswerIndex: 0,
        },
        {
          id: 64,
          text: 'Which of these is a characteristic of modernist literature?',
          difficulty: 'Hard',
          subtopics: ['Literature'],
          options: [
            'Strict moral lessons',
            'Stream of consciousness',
            'Epic hero',
            'Romantic idealism',
          ],
          correctAnswerIndex: 1,
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
          q.text.toLowerCase().includes(searchText.toLowerCase()) ||
          q.subtopics.some((subtopic) => subtopic.toLowerCase().includes(searchText.toLowerCase()))
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
      subtopics: [...question.subtopics],
      options: [...question.options],
      correctAnswerIndex: question.correctAnswerIndex,
    };
  }
  addCourse(name: string): void {
    // From Exams-Admin Module
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
  getQuestionsForExamLevel(examName: string, level: string) {
    // Map level keywords to difficulty strings used in questions
    const levelMap: any = { basic: 'Easy', intermediate: 'Medium', advanced: 'Hard' };
    const difficulty = levelMap[level] || 'Easy';
    const courseGroup = this.questionsByCourse.find((g) => g.courseName === examName);
    let questions = courseGroup
      ? courseGroup.questions.filter((q) => q.difficulty === difficulty)
      : [];
    // ensure we return exactly 10 items: if more, slice; if less, repeat until length 10
    if (questions.length > 10) {
      questions = questions.slice(0, 10);
    } else if (questions.length > 0 && questions.length < 10) {
      const result: Question[] = [];
      let i = 0;
      while (result.length < 10) {
        result.push({
          ...questions[i % questions.length],
          id: questions[i % questions.length].id + Math.floor(i / questions.length) * 1000,
        });
        i++;
      }
      questions = result;
    }
    // if no questions found, return empty array
    // return as observable-like for current usage in exam-card (subscribe)
    return {
      subscribe: (cb: (qs: Question[]) => void) => cb(questions),
    };
  }
}
