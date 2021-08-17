package com.devin.simple_calendar;

import com.devin.simple_calendar.entity.CalendarEvent;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.time.LocalDate;

/**
 * Class to handle a calendar
 */
@Path("/calendar")
public class CalendarResource {

    @GET
    @Path("/events")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getEvents() {
        CalendarEvent c = new CalendarEvent();
        c.setDate(LocalDate.now());
        c.setTitle("Test event");
        c.setDescription("My description");
        return Response.ok(c).build();
    }

}
