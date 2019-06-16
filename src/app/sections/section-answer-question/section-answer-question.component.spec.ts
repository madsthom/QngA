import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAnswerQuestionComponent } from './section-answer-question.component';

describe('SectionAnswerQuestionComponent', () => {
  let component: SectionAnswerQuestionComponent;
  let fixture: ComponentFixture<SectionAnswerQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionAnswerQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAnswerQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
