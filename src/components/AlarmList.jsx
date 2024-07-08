import React from "react";
import Alarm from "./Alarm";

const AlarmList = ({ alarms, deleteAlarm, snoozeAlarm }) => {
  return (
    <div>
      {alarms.map((alarm, index) => (
        <Alarm
          key={index}
          alarm={alarm}
          deleteAlarm={() => deleteAlarm(index)}
          snoozeAlarm={() => snoozeAlarm(index)}
        />
      ))}
    </div>
  );
};

export default AlarmList;
