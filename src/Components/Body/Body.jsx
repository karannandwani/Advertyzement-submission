import React from "react";

import { useDataLayerValue } from "../../Datalayer/Datalayer";
import Loading from "../Loading/Loading";

import "./Body.css";

export default function Body() {
  const [{ loadLogoState, userData }] = useDataLayerValue();

  return (
    <div>
      {loadLogoState ? (
        <Loading />
      ) : (
        <div className="Body_Container">
          <div className="Body_Container-cardboard">
            {userData?.map((user, index) => (
              <div className="Body_Cardboard-card">
                <img src={user.avatar} alt="" />
                <h3 className="p__cormorant">
                  {user.first_name} {user.last_name}
                </h3>
                <p className="p__opensans ">{user.email}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {console.log(loadLogoState)}
    </div>
  );
}
