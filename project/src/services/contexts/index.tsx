import React, { createContext, useState, useEffect } from "react";

export type UserProps = {
  email: string;
  name: string;
  password: string;
  cpf: string;
};

export type UserLogin = Omit<UserProps, "cpf" | "name">;

type PropsUserContext = {
  user: UserProps;
  login: (newUser: UserLogin) => boolean;
  logout: () => void;
  storeUsers: (newUser: UserProps) => void;
  isAuthenticated: () => {};
};

const DEFAULT_VALUE = {
  user: {} as UserProps,
  login: () => false,
  logout: () => {},
  storeUsers: () => {},
  isAuthenticated: () => false,
};

export const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(DEFAULT_VALUE.user);

  useEffect(() => {
    const storagedUser = localStorage.getItem("@App:user");
    if (!storagedUser) return;

    const objUser = JSON.parse(storagedUser);
    setUser(objUser);
  }, []);

  const getUserList = () => {
    const storagedUsers = localStorage.getItem("@App:users");
    const userList = storagedUsers ? JSON.parse(storagedUsers) : [];
    return userList;
  };

  const login = (newUser: UserLogin) => {
    const userList: UserProps[] = getUserList();

    const user = userList.find(
      (user) =>
        user.email === newUser.email && user.password === newUser.password
    );
    if (!user) {
      alert("O usuário não existe. Crie um usuário para acessar a aplicação");
      return false;
    }

    setUser(user);
    localStorage.setItem("@App:user", JSON.stringify(user));
    return true;
  };

  const logout = () => {
    localStorage.removeItem("@App:user");
    setUser({} as UserProps);
  };

  const storeUsers = (newUser: UserProps) => {
    const userList: UserProps[] = getUserList();

    const user = userList.find(
      (user) =>
        user.email === newUser.email && user.password === newUser.password
    );

    if (user) {
      alert("O usuário já existe.");
      return;
    }

    userList.push(newUser);
    localStorage.setItem("@App:users", JSON.stringify(userList));
    alert("Usuário criado.");
  };

  function isAuthenticated() {
    const storagedUser = localStorage.getItem("@App:user");
    if (!storagedUser) return false;

    return true;
  }

  return (
    <UserContext.Provider
      value={{ user, login, logout, storeUsers, isAuthenticated }}
    >
      {children}
    </UserContext.Provider>
  );
};
//
