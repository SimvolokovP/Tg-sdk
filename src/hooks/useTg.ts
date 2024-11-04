import { useEffect, useState } from "react";
import { IUser } from "../models/IUser";
import WebApp from "@twa-dev/sdk";

const tg = WebApp;

const useTg = () => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUser(WebApp.initDataUnsafe.user as IUser);
    }
  }, []);

  return { user, tg };
};

export default useTg;
