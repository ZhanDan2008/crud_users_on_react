import React, { useContext, useEffect, useState } from "react";
import styles_mo from "./styles.module.css";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import defaulr from "../render/images/default.jpeg";
import { allContext } from "../../Contexts";

const Detail = () => {
  const navigate = useNavigate();
  const { getOneUser, giveWhatRegion, deleteUser } = useContext(allContext);
  const { id } = useParams();
  const [oneUser, setOneUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const user = getOneUser(id);
      setOneUser(user);
    };

    fetchData();
  }, [id, getOneUser]);

  return (
    <div className={`w-full relative ${styles_mo.main}`}>
      {oneUser && (
        <div className={`w-full relative ${styles_mo.main} flex`}>
          <div className="w-1/2 relative">
            <img
              src={oneUser.image}
              className={`rounded-circle w-40 h-40 ml-16 mt-24 ${styles_mo.img}`}
              alt="Avatar"
              onError={(e) => {
                e.target.src = defaulr;
              }}
            />
          </div>
          <div className="w-1/2 relative flex flex-col gap-2">
            <h2 className="text-3xl mt-4 ">{oneUser.username}</h2>
            <p>
              <span className="text-lg">Возраст:</span> {oneUser.age}
            </p>
            <p className="text-xs">
              <span className="text-lg">Описание:</span> {oneUser.description}
            </p>
            <p className="text-base">
              <span className="text-lg">Область: </span>
              {giveWhatRegion(oneUser.region)} область
            </p>
          </div>
        </div>
      )}
      <div className="mt-12 flex gap-8 pb-36 justify-center">
        <Button
          variant="danger"
          className="text-black w-1/3 ml-16"
          onClick={() => {
            navigate("/");
            deleteUser(oneUser.id);
          }}>
          Delete
        </Button>{" "}
        <Button
          variant="info"
          className={`text-black w-1/3 ${styles_mo.save}`}
          onClick={() => {
            navigate(`/user/update/${oneUser.id}`);
          }}>
          Update
        </Button>{" "}
      </div>
    </div>
  );
};

export default Detail;
