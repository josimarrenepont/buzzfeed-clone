export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  results: Result[];
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Option {
  id: number;
  text: string;
  points: number;
}

export interface Result {
  range: [number, number];
  title: string;
  description: string;
}
