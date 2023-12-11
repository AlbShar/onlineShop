import { $authHost, $host } from "~/shared/config/axios";

type Response = {
  token: string
}

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

export const login = async (data: any): Promise<false | Response> => {
  try {
    const { email, password } = data;
    const response = await $host.post("api/user/login", {
      email,
      password,
    }, {
      validateStatus: status => status === 200 || status === 402
    });

    if (response.status === 200) {
      return response.data;
    } else if (response.status === 402) {
      const errorMessage = `Ошибка ${response.status}: Пользователь не авторизован`;
      console.error(errorMessage);

      return false;
    } 

  } catch (error) {
    console.error('Unknown error', error);
  }
};
