import React from 'react'
import "../styles/About.css";
import "../styles/card.css";
import AboutBackground from "../assets/about.jpg";
import Mvv from "../assets/mvv-mission.png";
//'use client';
//import { Button, Card } from 'flowbite-react';
import Image from "../assets/fti-logo.png";

export default function Misioni() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutBackground})` }}
      ></div>
      <div className="aboutBottom">
       

        <section>
          <h2>Rreth nesh</h2>
          <div class="image-wrapper">
            <img src={Mvv} alt="Misioni" />

          </div>
          <p>Fakulteti i Teknologjisë së Informacionit (FTI) është një nga njësitë kryesore të Universitetit Politeknik të Tiranës (UPT).
            UPT është Institucion Publik i Arsimit të Lartë, me qendër në Tiranë, i cili shtrin aktivitetin e tij mësimor dhe shkencor brenda kufijve të Republikës së Shqipërisë,
            ofron studime me kohë të plotë në tre cikle dhe synon të përgatisë specialistë dhe shkencëtarë në fushat inxhinierike.
            Si i tillë FTI deri tani është unikal në llojin e tij brenda territorit shqiptar.
            Fakulteti i Teknologjisë së Informacionit, pjesë e Universitetit Politeknik të Tiranës,
            është e para shkollë e lartë në Shqipëri për përgatitjen e specialistëve të lartë në fushat e inxhinierisë elektronike, inxhinierisë së telekomunikacionit dhe inxhinierisë informatike.
            Përgatitja e specialistëve në këto fusha ka për qëllim punësimin e tyre si inxhinierë në projektimin,
            realizimin dhe mirëmbajtjen e sistemeve të  përpunimit të informacionit në fushën e Teknologjisë së Informacionit (TI).
            Të diplomuarit nga FTI janë të aftë të punojnë në funksione me profil  të lartë në nivel kombëtar dhe ndërkombëtar.


          </p>

          {/*<a href="Misioni">Lexo me shume</a> */}


          <p>
            Institucionet shkencore të vendit gjejnë në FTI partner serioz dhe të përkushtuar për përgatitjen e projekteve dhe veprave të tjera shkencore në dobi të vendit.
            Bizneset në fushën e Telekomunikacionit dhe të Teknologjisë së Informacionit duke bashkëpunuar me FTI kanë mundësi të aplikojnë arritjet më të fundit të shkencës dhe teknikës në bizneset e tyre duke rritur prodhimin dhe rendimentin e punës dhe ulur koston.
            FTI ka qenë dhe është në pararojë të institucioneve të arsimit të lartë në Shqipëri në aplikimin e modelit të ri të studimeve sipas modelit të Bolonjës,
            duke qenë fakulteti i parë në UPT që ka vënë në jetë me sukses modelin e Bolonjës.
            Fakulteti i Teknologjisë së Informacionit ofron të tre nivelet e studimit: Bachelor, Master dhe Doktoratë.

          </p>
          <p>
            FTI ka një bashkëpunim shumë të frytshëm me shumë fakultete homologe në rajon dhe në Evropë, si Universiteti i Prishtinës, Kosovë;
            Universiteti Politeknik i Torinos, Universiteti Politeknik i Ankonës, Univesiteti Politeknik i Barit, etj., Itali;
            Universiteti i Marburgut, Universiteti Teknik i Mynihut, Universiteti Humboldt i Berlinit,
            Universiteti i Siegenit, etj., Gjermani;
            Universiteti Teknik i Athinës, Greqi;
            Universiteti Teknologjik i Kompienjës, Francë;
            Universiteti Teknik i Katalonjës, Spanjë; Instituti Teknologjik i Fukuokës, Japoni; etj.
            Në këto universitete pedagogë të FTI kanë realizuar kualifikime afat shkurtër dhe afat gjatë duke përfituar nga eksperienca e tyre.
            Ndërkohë në to, disa studentë të FTI,
            kanë përfunduar ose janë në proces të studimeve Master dhe të Doktoratës.</p>
        </section>
        </div>
    </div>
  )
}