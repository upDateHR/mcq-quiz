export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // index of correct option (0-based)
  explanation?: string;
  userAnswer?: number; // index selected by user
  isCorrect?: boolean;
}
