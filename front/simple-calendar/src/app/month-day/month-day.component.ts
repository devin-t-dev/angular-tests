import {Component, Input, OnInit} from '@angular/core';
import {DayEvent} from "../day.model";

@Component({
  selector: 'app-month-day',
  templateUrl: './month-day.component.html',
  styleUrls: ['./month-day.component.css']
})
export class MonthDayComponent implements OnInit {
  @Input() day: string;
  @Input() events: DayEvent[];

  /**
   * Construct this component
   * @param events
   * @param day
   */
  constructor(/*events: DayEvent[], day: string*/) {
    // this.events = events;
    // this.day=day;
    this.day = "2021-07-19";
    this.events = Array.of(new DayEvent('Test', 'Description', '2021-07-19'));
  }

  ngOnInit(): void {
  }

}
