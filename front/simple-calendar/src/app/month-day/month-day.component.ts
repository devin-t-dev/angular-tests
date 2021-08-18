import {Component, OnInit} from '@angular/core';
import {DayEvent} from "../day.model";

@Component({
  selector: 'app-month-day',
  templateUrl: './month-day.component.html',
  styleUrls: ['./month-day.component.css']
})
export class MonthDayComponent implements OnInit {
  day: string;
  events: DayEvent[];

  /**
   * Construct this component
   * @param title
   * @param description
   * @param date
   */
  constructor(events: DayEvent[], day: string) {
    this.events = events;
    this.day=day;
  }

  ngOnInit(): void {
  }

}
