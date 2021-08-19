import {Component, Input, OnInit} from '@angular/core';
import {MonthDayComponent} from "../month-day/month-day.component";

@Component({
  selector: 'app-month-table',
  templateUrl: './month-table.component.html',
  styleUrls: ['./month-table.component.css']
})
export class MonthTableComponent implements OnInit {
  @Input() matrix: MonthDayComponent[][];

  /**
   * The month table component
   * @param matrix
   */
  constructor(matrix: MonthDayComponent[][]) {
    this.matrix = matrix;
  }

  ngOnInit(): void {
  }

}
