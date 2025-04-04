import { Component } from '@angular/core';
import { Quiz } from '../../models/quiz.model';
import { QuizService } from '../quiz/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  quizzes: Quiz[] = [];

  constructor(private readonly quizService: QuizService) {
    this.quizzes = this.quizService.getAllQuizzes();
  }
}
