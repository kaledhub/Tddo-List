import { createContext, useState } from "react";
// IMPORT UUID
import { v4 as uuidv4 } from "uuid";

export const NewAlertContext = createContext([]);

const alerts = [
  {
    id: uuidv4(),
    alertTitle: "null",
    alertDate: null,
  },
];

export const NewAlertProvider = ({ children }) => {
  const [allAlerts, setAllAlerts] = useState(alerts);

  return (
    <NewAlertContext.Provider value={{ allAlerts, setAllAlerts }}>
      {children}
    </NewAlertContext.Provider>
  );
};
