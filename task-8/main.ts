import { fetchData } from "./fetchData";

type User = { name: string; age: number };

fetchData<User>("/api/user").then((response) => {
  console.log(response.data.name); // Type safe access to name
});