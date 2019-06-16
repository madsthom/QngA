import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionDataService } from 'src/app/services/question-data.service';

@Component({
  selector: 'app-section-answer-question',
  templateUrl: './section-answer-question.component.html',
  styleUrls: ['./section-answer-question.component.css']
})
export class SectionAnswerQuestionComponent implements OnInit {

  public questionId: number;
  public question: question;

  constructor(private route: ActivatedRoute,
              private _questionDataService: QuestionDataService,
              private _router: Router) { 
    this.route.params.subscribe( params => {
      this.questionId = params.id;
    });
  }

  submitAnswer(answer: string) {
    this._questionDataService.postAnswer(answer, this.questionId)
      .then(res => {
        console.log(res);
        this._router.navigateByUrl("questions");
      })
  }

  ngOnInit() {
    this._questionDataService.getQuestion(this.questionId)
      .then(res => {
        this.question = res;
      });
  }

}
