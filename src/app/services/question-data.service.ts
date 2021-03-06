import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import '../models/question-models';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class QuestionDataService {

    public questions: Array<question>;
    public answers: answer[];
    public BASE_URL: string = "http://questions-api.azurewebsites.net/api/";
    constructor(private _http: HttpClient) { }

    getQuestions(): Promise<question[]> {
        return this._http.get<question[]>(this.BASE_URL + 'question/').toPromise();
    }

    getQuestion(id: number): Promise<question> {
        return this._http.get<question>(this.BASE_URL + 'question/' + id).toPromise();
    }

    postQuestion(question: string): Promise<question> {
        if (question != "") {
            let q = {questionText: question, questionId: undefined, answers: undefined};
            return this._http.post<question>(this.BASE_URL + 'question/', q).toPromise();
        }
    }

    deleteQuestion(questionId: number): Promise<question> {
        if (questionId != undefined) {
            return this._http.delete<question>(this.BASE_URL + 'question/' + questionId).toPromise();
        }
    }

    postAnswer(answer: string, questionId: number): Promise<answer> {
        if (answer != "") {
            let a = {answerText: answer, answerId: undefined, questionId: questionId};
            return this._http.post<answer>(this.BASE_URL + 'answer/', a).toPromise();
        }
    }

    deleteAnswer(answerId: number) {
        if (answerId != undefined) {
            console.log("not undefined");
            return this._http.delete<answer>(this.BASE_URL + 'answer/' + answerId)
                .subscribe(res => console.log(res));
        }
    }

    getAnswers(questionId: number): Promise<answer[]> {
        return this._http.get<answer[]>(this.BASE_URL + 'question/' + questionId + '/answers').toPromise();
    }
}