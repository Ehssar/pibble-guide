import { Injectable } from '@angular/core';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

@Injectable({ providedIn: 'root' })
export class QuizService {
  private questions: QuizQuestion[] = [
    {
      question: 'What’s the typical lifespan of a Pebble (French Bulldog?)',
      options: ['5–7 years', '10–12 years', '15–17 years', '18–20 years'],
      correctIndex: 1
    },
    {
      question: 'Which pibble is known for its spotted pattern?',
      options: ['Washington', 'PB Cup', 'Gmail', 'Geeble'],
      correctIndex: 2
    },
    {
      question: 'Which pibble is known for its solid black color?',
      options: ['Washington', 'PB Cup', 'Gmail', 'OG Pib'],
      correctIndex: 0
    },
    {
      question: 'Which pibble is known for gettig its belly washed or being geeked off the milks?',
      options: ['Washington', 'Bagel', 'Gmail', 'PB Cup'],
      correctIndex: 2
    },
    {
      question: 'Which pibble is NOT a frencie?',
      options: ['PB Cup', 'Bagel', 'OG Pib', 'Geeble'],
      correctIndex: 1
    },
    {
      question: 'Out of these pibbles which one has a solid brown color?',
      options: ['PB Cup', 'Gmail', 'Geeble', 'OG Pib'],
      correctIndex: 3
    },
    {
      question: 'In order to save pibbles from their predicament what must you type?',
      options: ['Amen', 'F', 'Abracadabra', 'Ctr + Z'],
      correctIndex: 0
    },
    {
      question: 'What do Pibbles tweak on?',
      options: ['Straight Fent', 'Fent and Mulch', 'Milk and Fent', 'Mulch and Milk'],
      correctIndex: 3
    },
    {
      question: 'What Pibbles used to abduct other pibbles?',
      options: ['Geebles', 'Bagels', 'Washingtons', 'OG Pibs'],
      correctIndex: 0
    },
    {
      question: 'If you pick up a pibble by its scruff what pose they hitting?',
      options: ['The Willem Defoe', 'Spread Eagle', 'Fetal', 'The Tweaker'],
      correctIndex: 1
    },
    
    // …add as many as you like…
  ];

  getQuestions(): QuizQuestion[] {
    return this.questions;
  }
}
