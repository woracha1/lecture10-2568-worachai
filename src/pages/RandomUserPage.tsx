import { UserCard } from "../components/UserCard";
import { cleanUser } from "../libs/CleanUser";
import axios from "axios";
import { useState } from "react";
export default function RandomUserPage() {
  const [users, setUsers] = useState<any>([]);

  const generateBtnOnClick = async () => {
    const resp = await axios.get(`https://randomuser.me/api`);
    const users = resp.data.results[0];
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      <p className="display-4 text-center fst-italic m-4">Users Generator</p>
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        <button className="btn btn-dark" onClick={generateBtnOnClick}>
          Generate
        </button>
      </div>
      {/* <p className="display-6 text-center fst-italic my-4">Loading ...</p> */}
    </div>
  );
}
