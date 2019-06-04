import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAskQuestionComponent } from './section-ask-question.component';

describe('SectionAskQuestionComponent', () => {
  let component: SectionAskQuestionComponent;
  let fixture: ComponentFixture<SectionAskQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionAskQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAskQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
