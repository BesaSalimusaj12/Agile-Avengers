import React from "react";
import { useEffect, useState } from "react";
import dep1 from "../assets/departamentet1.jpg";
import dep2 from "../assets/departamentet2.jpg";
import dep3 from "../assets/departamentet3.jpg";
import "../styles/Departamentet.css";

export default function Departamentet() {
  return (
    <div>
      <div className="info">
        <h1> Departamentet e FTI</h1>
      </div>
      <div className="more">
        <div class="card row">
          <div class="container">
            <h4>
              <b>Fakulteti i Teknologjise se Informacionit (FTI)</b>
            </h4>
            <p>
              Fakulteti i Teknologjisë së Informacionit është krijuar me vendim
              të qeverisë në dhjetor 2007. Fakulteti përbehet nga Departamenti i
              Elektronikës dhe Telekomunikacionit, Departamenti i Inxhinierisë
              Informatike dhe Departamenti i Bazave të Informatikës (ish-QKZHTI
              Qendra për Kërkim dhe Zhvillim në Teknologjitë e Informacionit
              (ish-INIMA)). Departamentet e Elektronikës dhe Telekomunikacionit
              dhe Inxhinierisë Informatike u krijuan nga ndarja e Departamentit
              të Elektronikës të Fakultetit të Inxhinierisë Elektrike, ndërsa
              Departamenti i Bazave të Informatikës është vazhdim i Qendrës për
              Kërkim dhe Zhvillim (ish-INIMA i Akademisë së Shkencave).
            </p>
          </div>
        </div>
      </div>
      <div className="more">
        <div class="card row">
          <img
            src={dep1}
            alt="fti"
            style={{ width: "100%", height: "400px" }}
          ></img>
          <div class="container">
            <h4>
              <b>Departamenti i Elektronikës dhe Telekomunikacionit (DET)</b>
            </h4>
            <p>
              Është vazhdim i Departamentit të Elektronikës dhe përgatit
              inxhinierë në inxhinieri elektronike dhe inxhinieri e
              telekomunikacioneve. Departamenti ofron edukimin universitar dhe
              pas universitar, si dhe kërkim-zhvillim në fusha si sistemet
              elektronike, rrjetat wireless, rrjetat e kompjuterave të
              komandimit, studimi dhe matja e rrezatimit elektromagnetik të
              antenave të telefonisë celulare, projektimi i rrjetave të të
              dhënave dhe rrjetave mobile, cilësia e shërbimit në rrjetat,
              protokollet e rrjetave me fibra optike etj.
            </p>
          </div>
        </div>
      </div>
      <div className="more">
        <div class="card row">
          <div class="container">
            <h4>
              <b>Departamenti i Inxhinierisë Informatike (DII)</b>
            </h4>
            <p>
              Është vazhdim i Seksionit të Inxhinierisë së Kompjuterave i
              Departamentit të Elektronikës dhe përgatit inxhinierë në
              inxhinieri informatike. Departamenti ofron edukimin universitar
              dhe pas universitar, si dhe kërkim-zhvillim në fushat e
              arkitekturës të kompjuterave, arkitekturës të sistemeve të
              përpunimit të informacionit, projektim i sistemeve shifrore,
              sistemet e përparuara të shfrytëzimit, sistemet e shpërndara dhe
              grid, Web Shërbimet, teknologjitë e rrjetave dhe të Internetit,
              sigurisë në to, gjuhët e programimit, bazat e të dhënave,
              inxhinieria e softuerit dhe inteligjencë artificiale.
            </p>
          </div>
          <img
            src={dep2}
            alt="fti"
            style={{ width: "100%", height: "400px" }}
          ></img>
        </div>
      </div>
      <div className="more">
        <div class="card row">
          <img
            src={dep3}
            alt="fti"
            style={{ width: "100%", height: "400px" }}
          ></img>
          <div class="container">
            <h4>
              <b>Departamenti i Bazave të Informatikës (DBI)</b>
            </h4>
            <p>
              <a href="http://itc.upt.al/">
                (Ish-Qendra për Kërkim dhe Zhvillim)
              </a>{" "}
              kryen veprimtari kërkimore zhvilluese të pavarur, si dhe në
              shërbim të procesit mësimor dhe studimeve pas universitare të FTI,
              në fushat e sistemeve të shfrytëzimit, sistemet e shpërndara,
              rrjetat kompjuterike, teknologjitë e Internetit, bazat e të
              dhënave dhe gjuhët e programimit. Departamenti është vazhdim i{" "}
              <a href="http://itc.upt.al/">Qendrës për Kërkim dhe Zhvillim</a>{" "}
              (ish-Institutit të Informatikës dhe Matematikës Aplikuar) (INIMA).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
