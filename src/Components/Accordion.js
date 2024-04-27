import React, { useState } from "react";
import "../Components/Accordion.css";

const Accordion = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="w-100 header" onClick={() => setOpen(!open)}>
        <div className="w-100 d-flex justify-content-between px-2 align-items-center text-dark text-bold ">
          <div>
            <strong>{props.title}</strong>
          </div>
          <div>
            {!open ? (
              <i class="bi bi-chevron-down" />
            ) : (
              <i class="bi bi-chevron-up"></i>
            )}
          </div>
        </div>
      </button>
      {open && (
        <div className="px-5 py-2 mx-2" style={{ backgroundColor: "wheat" }}>
          {props.children}
        </div>
      )}
    </>
  );
};

export default Accordion;
