import React from "react";
import "../styles/Departamentet.css";

export default function Departamentet() {
  return (
    <div className="row">
      <div className="column">
        <p>Departamenti i Elektronikës dhe Telekomunikacionit (DET) </p>
        <div className="more">
          <button>Lexo me shume</button>
        </div>
      </div>
      <div className="column">
        <p>Departamenti i Inxhinierisë Informatike (DII)</p>
        <div className="more">
          <button>Lexo me shume</button>
        </div>
      </div>
      <div className="column">
        {" "}
        <p>Departamenti i Bazave të Informatikës (DBI)</p>
        <div className="more">
          <button>Lexo me shume</button>
        </div>
      </div>
    </div>
  );
}
