import axios from "axios";

async function getData() {
  const response = await axios.post("http://localhost:3001/api/user");
  return response.data
}

export default async function Home() {
const data  = await getData();
  return (
      <div>
        name :{data.username}
      </div>
  );
}
