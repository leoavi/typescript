import { Request, Response } from "express";

import createUser from "./services/createUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: "",
    email: "123@123",
    password: "123456",
    techs: [
      "node",
      "react",
      "reactnative",
      { title: "javascript", experience: 123123 },
    ],
  });

  return response.json({ message: "Hellow World" });
}
