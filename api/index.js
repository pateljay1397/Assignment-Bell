import { mock } from "./mock";

export const getComedies = () => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(mock);
    }, 300);
  });
};
