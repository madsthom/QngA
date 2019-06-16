interface question {
    questionId: number;
    questionText: string;
    answers: answer[];
}

interface answer {
    answerId: number;
    answerText: string;
    questionId: number;
}