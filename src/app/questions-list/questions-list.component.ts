import { Component, OnInit } from '@angular/core';
import { QuestionDataService } from '../services/question-data.service';
import '../models/question-models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {

  public questions: question[]; 
  public isLoaded: boolean = false;

  constructor(private _questionDataService: QuestionDataService,
              private _router: Router) { }

  answerQuestion(questionId: number) {
    this._router.navigateByUrl('/answer-question/' + questionId);
  }

  deleteAnswer(answerId: number) {
    this._questionDataService.deleteAnswer(answerId);
    this.ngOnInit();
  }

  deleteQuestion(questionId: number) {
    this._questionDataService.deleteQuestion(questionId)
      .then(res => {
        console.log(res);
        this.ngOnInit();
      });
  }

  ngOnInit() {
    this.isLoaded = false;
    this._questionDataService.getQuestions()
      .then(res => {
        this.questions = res;
        for (let i = 0; i < (this.questions).length; i++) {
          this._questionDataService.getAnswers(this.questions[i].questionId)
            .then(res => {
              this.questions[i].answers = res;
            });
        }
      });
    this.isLoaded = true;
  }

}
