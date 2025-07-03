import { Component, OnInit } from '@angular/core';
import { QuizService, QuizQuestion } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  questions: QuizQuestion[] = [];
  current = 0;
  answers: (number|null)[] = [];
  completed = false;
  score = 0;

  constructor(private quizSvc: QuizService) {}

  ngOnInit() {
    this.questions = this.quizSvc.getQuestions();
    this.answers = Array(this.questions.length).fill(null);
  }

  selectOption(index: number) {
    this.answers[this.current] = index;
  }

  next() {
    if (this.current < this.questions.length - 1) {
      this.current++;
    } else {
      this.submit();
    }
  }

  submit() {
    this.score = this.questions.reduce((sum, q, i) =>
    sum + (this.answers[i] === q.correctIndex ? 1 : 0), 0);
    this.completed = true;
  }

  restart() {
    this.current = 0;
    this.answers.fill(null);
    this.completed = false;
    this.score = 0;
  }

}
