import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { QuestionDataService } from '../services/question-data.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-post-question',
  templateUrl: './post-question.component.html',
  styleUrls: ['./post-question.component.css']
})
export class PostQuestionComponent implements OnInit {

  constructor(private _questionDataService: QuestionDataService,
              private _router: Router) { }

  submitQuestion(question: string) {
    this._questionDataService.postQuestion(question)
      .then(res => {
        console.log(res);
        this._router.navigateByUrl("questions");
      })
  }

  ngOnInit() {
    
  }

}
