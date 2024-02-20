import Fullcalender from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendars = () => {
  return (
    <section className="ml-[160px] mt-[29px] sm:ml-[65px] lg:ml-[160px]">
      <Fullcalender
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "",
          center: "title",
          end: "prev, next",
        }}
        height={"90vh"}
      />
    </section>
  );
};

export default Calendars;
