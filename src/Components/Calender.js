import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

function Calender() {
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={[
          { title: "event 1", date: "2023-07-23" },
          { title: "event 2", date: "2019-04-02" },
        ]}
      />
    </>
  );
}

export default Calender;
