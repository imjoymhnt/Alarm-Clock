import React, { useState } from "react";

const AddAlarm = ({ addAlarm }) => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (time && date) {
      addAlarm({ time, date, snoozes: 0 });
      setTime("");
      setDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        style={{ margin: "0 5px", padding: "5px" }}
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        style={{ margin: "0 5px", padding: "5px" }}
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <button style={{ margin: "0 5px" }} type="submit">
        Add Alarm
      </button>
      <hr />
      <br />
    </form>
  );
};

export default AddAlarm;
