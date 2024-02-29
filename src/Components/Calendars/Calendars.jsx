import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";

const Calendars = () => {
  const [events, setEvents] = useState([]);
  const [eventTitle, setEventTitle] = useState("");
  const [eventStartDate, setEventStartDate] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");

  const addEvent = () => {
    if (
      eventTitle.trim() !== "" &&
      eventStartDate !== "" &&
      eventEndDate !== ""
    ) {
      const newEvent = {
        title: eventTitle,
        start: eventStartDate,
        end: new Date(eventEndDate),
      };
      setEvents([...events, newEvent]);
      setEventTitle("");
      setEventStartDate("");
      setEventEndDate("");
    }
  };

  return (
    <section className="ml-[160px] mt-[29px] sm:ml-[65px] lg:ml-[160px]">
      <div className="mx-auto flex justify-center items-center mb-[20px]">
        <input
          className=" ml-[200opx]"
          type="text"
          placeholder="Event Title"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
        />

        <input
          type="datetime-local"
          value={eventStartDate}
          onChange={(e) => setEventStartDate(e.target.value)}
        />

        <input
          type="datetime-local"
          value={eventEndDate}
          onChange={(e) => setEventEndDate(e.target.value)}
        />

        <button onClick={addEvent}>Add Event</button>
      </div>

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "",
          center: "title",
          end: "prev,next",
        }}
        height={"90vh"}
        events={events}
      />
    </section>
  );
};

export default Calendars;
