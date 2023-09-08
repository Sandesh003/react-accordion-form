export interface QuestionAPIResponse {
  id: string;
  title: string;
  questions: Questions[];
  is_saved: boolean;
}

export interface Questions {
  q_id: string;
  question: string;
  answer: string;
  type: "radio" | "text";
}
