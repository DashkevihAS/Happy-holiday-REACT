import { useEffect, useState } from "react";
import { URI_API } from "../const/const";

export const useHolidays = () => {
    const [holidays, setHolidays] = useState({});

  useEffect(()=> {
    fetch(URI_API)
      .then(res => {
        if (res.status !== 200) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(data => setHolidays(data))
      .catch(err => console.error(err));
  }, [setHolidays]);

  return [holidays];
};
