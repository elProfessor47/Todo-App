import React, { useEffect, useState } from "react";

const TodoDateTime = () => {
  const [dateTime, setDateTime] = useState("");
  useEffect(() => {
    
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <h2 className="p-3 text-xl">{dateTime}</h2>;
};

export default TodoDateTime;
