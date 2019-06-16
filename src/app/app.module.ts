import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

import {appRoutes} from '../routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionQuestionsComponent } from './sections/section-questions/section-questions.component';
import { SectionAskQuestionComponent } from './sections/section-ask-question/section-ask-question.component';
import { SectionContactComponent } from './sections/section-contact/section-contact.component';
import { PostQuestionComponent } from './post-question/post-question.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { QuestionDataService } from './services/question-data.service';
import { SectionAnswerQuestionComponent } from './sections/section-answer-question/section-answer-question.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionQuestionsComponent,
    SectionAskQuestionComponent,
    SectionContactComponent,
    PostQuestionComponent,
    QuestionsListComponent,
    SectionAnswerQuestionComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule,
    HttpClientModule
  ],
  providers: [QuestionDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
