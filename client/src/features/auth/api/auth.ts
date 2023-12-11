import { $authHost, $host } from "~/shared/config/axios";

export const registration = async (data: any) => {
  const { email, password } = data;
  console.log($host);
  const response = await $host.post("api/user/registration", {
    email,
    password,
    role: "ADMIN",
  });
  return response;
};

export const login = async (data: any) => {
  const { email, password } = data;

  const response = await $host.post("api/user/login", {
    email,
    password,
  });
  return response;
};
