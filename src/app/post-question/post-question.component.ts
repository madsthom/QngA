import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHART_DATA: any[] = [
  {data: [65, 59, 34, 56, 85, 90, 50], label: "Q3 Sales"},
  {data: [25, 39, 44, 36, 25, 30, 38], label: "Q4 Sales"},
];

const SAMPLE_BARCHART_LABELS: string[] = ["W1", "W2", "W3", "W4", "W5", "W6", "W7"];

@Component({
  selector: 'app-post-question',
  templateUrl: './post-question.component.html',
  styleUrls: ['./post-question.component.css']
})
export class PostQuestionComponent implements OnInit {

  constructor() { }

  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: any[] = SAMPLE_BARCHART_LABELS;
  public barChartType = "bar";
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  }

  ngOnInit() {
  }

}
