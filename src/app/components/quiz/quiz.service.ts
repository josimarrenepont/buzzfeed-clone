import { Injectable } from '@angular/core';
import { Quiz } from '../../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private readonly quizzes: Quiz[] = [
    {
      id: '1',
      title: 'Qual personagem de Friends você é?',
      description: 'Descubra qual personagem combina mais com sua personalidade!',
      questions: [
        {
          id: 1,
          text: 'O que você faz numa noite livre?',
          options: [
            { id: 1, text: 'Vê TV no sofá', points: 2 },
            { id: 2, text: 'Lê um livro', points: 1 },
            { id: 3, text: 'Sai com amigos', points: 3 }
          ]
        }
      ],
      results: [
        {
          range: [0, 5],
          title: 'Você é o Ross!',
          description: 'Inteligente e um pouco nerdy...'
        }
      ]
    }
  ];

  getQuizById(id: string): Quiz | undefined {
    return this.quizzes.find(q => q.id === id);
  }

  getAllQuizzes(): Quiz[] {
    return this.quizzes;
  }
}
