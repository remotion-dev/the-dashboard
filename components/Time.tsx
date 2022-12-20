import React, { useEffect } from "react";

export const Time: React.FC = () => {
  const [time, setTime] = React.useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {time.getHours()}
      <span>:</span>
      {time.getMinutes()}
    </div>
  );
};
