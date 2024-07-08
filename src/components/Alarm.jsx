import React, { useEffect } from "react";

const Alarm = ({ alarm, deleteAlarm, snoozeAlarm }) => {
  useEffect(() => {
    const checkAlarm = setInterval(() => {
      const now = new Date();
      const alarmDate = new Date(alarm.date);
      const [hours, minutes] = alarm.time.split(":");
      alarmDate.setHours(hours);
      alarmDate.setMinutes(minutes);

      if (
        now.getFullYear() === alarmDate.getFullYear() &&
        now.getMonth() === alarmDate.getMonth() &&
        now.getDate() === alarmDate.getDate() &&
        now.getHours() === alarmDate.getHours() &&
        now.getMinutes() === alarmDate.getMinutes()
      ) {
        alert("Alarm ringing!");
        if (alarm.snoozes < 3) {
          snoozeAlarm();
        }
      }
    }, 1000);

    return () => clearInterval(checkAlarm);
  }, [alarm, snoozeAlarm]);

  return (
    <div style={{ marginTop: "5px" }}>
      <span>{`${alarm.date} - ${alarm.time}`}</span>
      <button onClick={deleteAlarm} style={{ margin: "0 5px" }}>
        Delete
      </button>
      {alarm.snoozes < 3 && (
        <button style={{ margin: "0 5px" }} onClick={snoozeAlarm}>
          Snooze
        </button>
      )}
    </div>
  );
};

export default Alarm;
