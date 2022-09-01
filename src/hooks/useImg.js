import { useEffect, useState } from "react";
import { URI_API } from "../const/const";
import CartBG from '../img/card-bg.jpg';


export const useImg = (holiday) => {
  const [img, setImg] = useState(CartBG);

    useEffect(() => {
      if (!holiday) return;

      fetch(`${URI_API}/image/${holiday}`)
      .then(res => {
        if (res.status !== 200) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(data => {
        if (data.urlImg) {
          setImg(data.urlImg);
        }
      })
      .catch(err => console.error(err));
    }, [holiday])

    return [img];
};
