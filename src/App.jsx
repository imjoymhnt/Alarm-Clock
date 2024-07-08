import React, { useState } from "react";
import Time from "./components/Time";
import AddAlarm from "./components/AddAlarm";
import AlarmList from "./components/AlarmList";

const App = () => {
  const [alarms, setAlarms] = useState([]);

  const addAlarm = (alarm) => {
    setAlarms([...alarms, alarm]);
  };

  const deleteAlarm = (index) => {
    setAlarms(alarms.filter((el, i) => i !== index));
  };

  const snoozeAlarm = (index) => {
    setAlarms(
      alarms.map((alarm, i) => {
        if (i === index) {
          const [hours, minutes] = alarm.time.split(":").map(Number);
          const newTime = new Date();
          newTime.setHours(hours);
          newTime.setMinutes(minutes + 5);

          return {
            ...alarm,
            time: newTime.toTimeString().slice(0, 5),
            snoozes: alarm.snoozes + 1,
          };
        }
        return alarm;
      })
    );
  };

  return (
    <div>
      <Time />
      <AddAlarm addAlarm={addAlarm} />
      <AlarmList
        alarms={alarms}
        deleteAlarm={deleteAlarm}
        snoozeAlarm={snoozeAlarm}
      />
    </div>
  );
};

export default App;
