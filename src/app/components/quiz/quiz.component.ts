import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../models/quiz.model';
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz: Quiz | undefined;
  currentQuestionIndex = 0;
  selectedOptions: {[questionId: number]: number} = {};
  totalPoints = 0;
  result: string | undefined;

  constructor(private readonly quizService: QuizService) {}

  ngOnInit() {
    this.quiz = this.quizService.getQuizById('1');
  }

  selectOption(questionId: number, optionId: number) {
    this.selectedOptions[questionId] = optionId;
  }

  nextQuestion() {
    if (this.currentQuestionIndex < (this.quiz?.questions.length ?? 0) - 1) {
      this.currentQuestionIndex++;
    }
  }

  submitQuiz() {
    this.totalPoints = Object.entries(this.selectedOptions).reduce(
      (sum, [questionId, optionId]) => {
        const question = this.quiz?.questions.find(q => q.id === +questionId);
        const option = question?.options.find(o => o.id === optionId);
        return sum + (option?.points ?? 0);
      }, 0);

    this.result = this.quiz?.results.find(r =>
      this.totalPoints >= r.range[0] && this.totalPoints <= r.range[1]
    )?.title;
  }
}
