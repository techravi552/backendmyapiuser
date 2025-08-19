import React, { useState } from "react";
import axios from "axios";

function Profile() {
  const [data, setData] = useState("");

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("https://your-backend.onrender.com/api/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(JSON.stringify(res.data));
    } catch (err) {
      setData("Unauthorized / Failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Profile</h2>
      <button onClick={fetchProfile}>Get Profile</button>
      <p>{data}</p>
    </div>
  );
}

export default Profile;
