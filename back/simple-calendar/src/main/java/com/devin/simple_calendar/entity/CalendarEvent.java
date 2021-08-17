package com.devin.simple_calendar.entity;

import java.time.LocalDate;

/**
 * Calendar Event model, used to describe an calendar event.
 *
 * @author devin
 */
public class CalendarEvent {

    private LocalDate date;
    private String title;
    private String description;


    /**
     * Gets the value of date
     *
     * @return date
     **/
    public LocalDate getDate() {
        return date;
    }

    /**
     * Set the value of date
     *
     * @param date to set
     **/
    public void setDate(LocalDate date) {
        this.date = date;
    }

    /**
     * Gets the value of title
     *
     * @return title
     **/
    public String getTitle() {
        return title;
    }

    /**
     * Set the value of title
     *
     * @param title to set
     **/
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * Gets the value of description
     *
     * @return description
     **/
    public String getDescription() {
        return description;
    }

    /**
     * Set the value of description
     *
     * @param description to set
     **/
    public void setDescription(String description) {
        this.description = description;
    }
}
