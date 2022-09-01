import { useEffect, useState } from "react";
import { URI_API } from "../const/const";

export const useText = (holiday) => {
  const [text, setText] = useState(`
        Выберите повод для поздравления!
    `);
    useEffect(() => {
      if (!holiday) return;

      fetch(`${URI_API}/text/${holiday}`)
      .then(res => {
        if (res.status !== 200) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(data => {
        if (data.text) {
          setText(data.text);
        }
      })
      .catch(err => console.error(err));
    }, [holiday])

    return [text];
};
