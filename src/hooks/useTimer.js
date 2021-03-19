import { useRef, useState } from "react";

export default function useTimer(initialValue) {
  const [second, setSecond] = useState(initialValue);
  const id = useRef();
  const onTick = () => {
    setSecond((second) => second - 1);
  };
  const start = () => {
    if (!id.current) {
      setSecond(initialValue);
      id.current = setInterval(onTick, 1000);
    }
  };
  const stop = () => {
    if (id.current) {
      clearInterval(id.current);
      id.current = null;
    }
  };
  const skipTime = () => {
    setSecond(0);
    stop();
  };
  return {
    second,
    start,
    stop,
    skipTime
  };
}
