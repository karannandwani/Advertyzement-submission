import React from "react";
import axios from "axios";

import { useDataLayerValue } from "../../Datalayer/Datalayer";

import brandimg from "../../Assets/Photos/personalbrand.png";
// import {Xyz} from "../../Components";

import "./Navbar.css";

export default function Navbar() {
  const [{ userData }, dispatch] = useDataLayerValue();
  const fetchData = async () => {
    dispatch({
      type: "SET_LOAD_STATE",
      loadLogoState: true,
    });

    await axios
      .get("https://reqres.in/api/users?page=1")
      .then((resp) =>
        dispatch({
          type: "SET_USER_DATA",
          userData: resp.data.data,
        })
      )
      .catch((error) => console.log(error));

    dispatch({
      type: "SET_LOAD_STATE",
      loadLogoState: false,
    });
    console.log(userData);
  };

  return (
    <div className="Navbar_container">
      <div className="Navbar_Container-left">
        <img src={brandimg} alt="" />
      </div>

      <div className="Navbar_Container-middle">
        <button className="custom__button" onClick={() => fetchData()}>
          Get Data
        </button>
      </div>

      <div className="Navbar_Container-right">
        <button className="custom__button" onClick={() => fetchData()}>
          Change Theme
        </button>
      </div>
    </div>
  );
}
