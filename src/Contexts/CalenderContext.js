import { Box } from "@chakra-ui/react";

// IMPORT REACT CALENDER
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../Styles/calender.css";

// HOOKS
import { createContext, useContext, useState } from "react";

const CalenderContext = createContext(null);

export const CalenderProvider = ({ children }) => {
  const [date, setDate] = useState(new Date());
  const [isVisibleCalender, setIsVisibleCalender] = useState("is_Visible");

  const onClickDate = () => {
    setIsVisibleCalender("is_NonVisible");
  };

  const handleCalenderClick = (changeVisibility) => {
    setIsVisibleCalender(changeVisibility);
  };

  const theDate = String(date.toLocaleDateString());
  const calender = (
    <Box className={isVisibleCalender} w={{ base: "md", md: "md", lg: "md" }}>
      <Calendar
        value={date}
        onChange={setDate}
        onClickDay={onClickDate}
        // formatLongDate={"dd MMM YYYY"}
      />
    </Box>
  );
  return (
    <>
      <CalenderContext.Provider
        value={{ calender, theDate, handleCalenderClick }}
      >
        {children}
      </CalenderContext.Provider>
    </>
  );
};

export const useCalender = () => {
  return useContext(CalenderContext);
};
