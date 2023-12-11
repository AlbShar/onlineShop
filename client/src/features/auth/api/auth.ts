import { $authHost, $host } from "~/shared/config/axios";
import { RegistrationBody, LoginBody, Response } from "~/shared/api/auth/";


export const registration = async (data: RegistrationBody): Promise<false | Response> => {
  try {
    const { email, password, username } = data;
    const response = await $host.post(
      "api/user/registration",
      {
        email,
        username,
        password,
        role: "ADMIN",
      },
      {
        validateStatus: (status) => status === 200 || status === 402,
      }
    );
    if (response.status === 200) {
      return response.data;
    } else if (response.status === 402) {
      const errorMessage = `Ошибка ${response.status}: Пользователь не авторизован`;
      console.error(errorMessage);

      return false;
    }
  } catch (error) {
    console.error("Unknown error", error);
  }
};

export const login = async (data: LoginBody): Promise<false | Response> => {
  try {
    const { email, password } = data;
    const response = await $host.post(
      "api/user/login",
      {
        email,
        password,
      },
      {
        validateStatus: (status) => status === 200 || status === 402,
      }
    );

    if (response.status === 200) {
      return response.data;
    } else if (response.status === 402) {
      const errorMessage = `Ошибка ${response.status}: Пользователь не авторизован`;
      console.error(errorMessage);

      return false;
    }
  } catch (error) {
    console.error("Unknown error", error);
  }
};
