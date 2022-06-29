import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useStore } from "../store/zustandStore";
import { ADD_TODOS } from "../store/CONSTANTS";

export const InputField = () => {
  const [inp, setInp] = React.useState("");
  const dispatch = useStore((state) => state.dispatch);

  return (
    <div>
      <form id="main-form" className="d-flex">
        <input
          type="text"
          className="form-control mt-2"
          id="inp"
          value={inp}
          name="inp"
          onChange={(e) => {
            setInp(e.target.value);
          }}
          placeholder="add details"
        />

        <button
          type="submit"
          id="addBtn"
          className="btn btn-info ms-4 p-3 mt-2"
          onClick={(e) => {
            e.preventDefault();
            if (inp !== "") {
              const tempData = {
                name: inp,
                checked: false,
                id: uuidv4(),
              };
              dispatch({
                type: ADD_TODOS,
                payload: tempData,
              });
            }
            setInp("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};
