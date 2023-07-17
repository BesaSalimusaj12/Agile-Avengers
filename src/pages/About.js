import React from 'react'
import "../styles/About.css";
//import Misioni from "../pages/about/Misioni.js";
import "../styles/card.css";
import AboutBackground from "../assets/about.jpg";
import Mvv from "../assets/mvv-mission.png";
import Obj from "../assets/Measurable-Goals-and-Objectives.png";
//'use client';
//import { Button, Card } from 'flowbite-react';
import Image from "../assets/fti-logo.png";

export default function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutBackground})` }}
      ></div>
      <div className="aboutBottom">
        {/* <h1> Departamenti i Elektronikës</h1>*/}




        {/*<div class="card">
       <img src={Image} alt="Misioni" style="width:100%"/>
  <div class="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
  </div>
</div>*/}

        {/*  <Card className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          Noteworthy technology acquisitions 2021
        </p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </p>
      <Button>
        <p>
          Read more
        </p>
        <SeeSourceCodeForSVG />
      </Button>
  </Card>*/}

        {/*<section>
    <h2>Overview</h2>
    <p>Welcome to our university, a leading institution in higher education dedicated to fostering academic excellence and innovation.</p>
  </section>*/}

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

          <a href="/Misioni">Lexo me shume</a>


          {/*<p>
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
            kanë përfunduar ose janë në proces të studimeve Master dhe të Doktoratës.</p>*/}
        </section>
        <section>
          <h2>Misioni i Fakultetit të Teknologjisë së Informacionit</h2>
          <p>
            Misioni i FTI, si njësi kryesore e UPT, bazuar edhe në Statutin e Universitetit Politeknik të Tiranës, është të krijojë, të transmetojë,
            të zhvillojë e të mbrojë dijet me anën e mësimdhënies, kërkimit shkencor dhe shërbimeve si dhe të formojë specialistë të lartë
            dhe të përgatisë shkencëtarë të rinj të fushave të Teknologjisë së Informacionit: Telekomunikacion,
            Inxhinieri Informatike dhe Inxhinieri Elektronike bazuar në programe mësimore bashkëkohore, të kualifikuar dhe të përshtatshëm për tregun e punës në Shqipëri dhe në vende të tjera perëndimore;
            të ofrojë mundësi për të përfituar nga arsimi i lartë gjatë gjithë jetës;
            të ndihmojë zhvillimin ekonomik në nivel kombëtar dhe rajonal;
            të kontribuojë në rritjen e standardeve të demokracisë e të qytetërimit të shoqërisë dhe në përgatitjen e të rinjve për një shoqëri të tillë.
          </p>

          <p>
            Në përputhje me këtë mision, vizioni i FTI është të bëjë një hap të ri cilësor në arsimimin e specialistëve të lartë në Shqipëri,
            për formimin inxhinierik dhe shkencor në fushën e Teknologjisë së Informacionit, Telekomunikacion,
            Inxhinieri Informatike dhe Elektronikë, për të projektuar, prodhuar dhe menaxhuar në fushat përkatëse,
            si dhe në zgjidhjen e problemeve teknike sa më komplekse në vend dhe jashtë tij.</p>



          <p>Objektivat dhe aktivitetet kryesore të FTI orientohen dhe zhvillohen në përgjigje të kërkesave themelore të procesit të Bolonjës.
            Në vitin akademik 2002-2003 u hap për herë të parë diploma e nivelit të parë Bachelor në drejtimet e Inxhinierisë Elektronike,
            Inxhinierisë së Telekomunikacioneve dhe Inxhinierisë Informatike.</p>

        </section>

        <section>
          <h2>Objektivat e Fakultetit të Teknologjisë së Informacionit</h2>
          <div class="image-wrapper-right">
            <img src={Obj} alt="Objektivat" />

          </div>
          <p>{/*<h3>Objektivat e programit të studimit Bachelor në FTI</h3>*/}
            <a href="/Objektivat">Objektivat e programit të studimit Bachelor në FTI</a>

            {/* <ul>
              <li>Sigurimi i cilësisë dhe plotësimi i standardeve akademike.</li>
              <li>Realizimi i aktiviteteve mësimore të lidhura ngushtë me veprimtarinë praktike dhe programin e diplomave Bachelor që zhvillon,
                duke marrë pjesë në projekte kombëtare e ndërkombëtare dhe duke qenë partner me mjaft homologë të huaj.</li>
              <li>Përditësimi me zhvillimet pozitive dhe
                arritjet e homologëve tanë shqiptarë e të huaj në fushën e përmirësimit të programeve e kurrikulave,
                metodave të mësimdhënies, praktikës profesionale, organizimit institucional, botimeve, përshtatjen me tregun e punës, etj.</li>
              <li>Të diplomuarit në Bachelor të fitojnë një kulturë bazë inxhinierike në shkencat e formimit  të përgjithshëm dhe të formimit themelor specifik.</li>
              <li>Të diplomuarit në Bachelor të fitojnë njohuri edhe në aspektet e menaxhimit dhe vlerësimit kritik të situatave,
                duke synuar më tej progresin teknologjik.</li>

            </ul>*/}
          </p>
        {/*</section>
        <section>*/}
          <p>
            {/*<h3>Objektivat e programit të studimit Master profesional në FTI</h3>*/}
            <a href="/Objektivat">Objektivat e programit të studimit Master profesional në FTI</a>

            {/*<ul>
              <li>Sigurimi i cilësisë dhe plotësimi i standardeve akademike.</li>
              <li>Realizimi i aktiviteteve mësimore dhe praktikave të lidhura ngushtë me veprimtarinë akademike dhe programin e diplomave Master profesional që zhvillon,
                duke marrë pjesë në projekte kombëtare e ndërkombëtare dhe duke qenë partner me mjaft homologë të huaj.</li>
              <li>Përditësimi me zhvillimet pozitive dhe arritjet e homologëve tanë shqiptarë e të huaj në fushën e përmirësimit të programeve e kurrikulave,
                metodave të mësimdhënies, praktikave profesionale, organizimit institucional, përshtatjen me tregun e punës, etj.</li>
              <li>Të diplomuarit në Master profesional të kryejnë praktikë profesionale të kualifikuar;
                duke zhvilluar më tej progresin shkencor dhe teknologjik, si dhe krijimi i një klase udhëheqëse me nivel të lartë profesional.</li>

          </ul>*/}

          </p>
        {/*</section>
        <section>*/}
          <p>
            {/* <h3> Objektivat e programit të studimit Master i shkencave në FTI</h3>*/}
            <a href="/Objektivat">Objektivat e programit të studimit Master i shkencave në FTI</a>
            {/*<ul>
              <li>Sigurimi i cilësisë dhe plotësimi i standardeve akademike.</li>
              <li>Realizimi i aktiviteteve studimore kërkimore e shkencore të lidhura ngushtë me veprimtarinë akademike
                dhe programin e diplomave Master i shkencave që zhvillon,
                duke marrë pjesë në projekte kombëtare e ndërkombëtare dhe duke qenë partner me mjaft homologë të huaj.</li>
              <li>Organizimi dhe pjesëmarrja në kongrese, konferenca shkencore dhe seminare ndërkombëtare në fushat që mbulon ky program.</li>
              <li>Përditësimi me zhvillimet pozitive dhe arritjet e homologëve tanë shqiptarë e të huaj në fushën e përmirësimit të programeve e kurrikulave,
                metodave të mësimdhënies, kërkimit shkencor, organizimit institucional, botimeve, përshtatjen me tregun e punës, etj.</li>
              <li>Të diplomuarit në Master i Shkencave të kryejnë punë kërkimore të kualifikuar;
                duke zhvilluar më tej progresin shkencor dhe teknologjik;
                si dhe krijimi i një klase udhëheqëse me nivel të lartë profesional.</li>
        </ul>*/}
          </p>
        {/*</section>
        <section>*/}
          <p>
            {/*<h3>Objektivat e programit të studimit Doktor i shkencave në FTI</h3>*/}
            <a href="/Objektivat">Objektivat e programit të studimit Doktor i shkencave në FTI</a>
            {/*<p>Cikli i studimeve Doktor i Shkencave në “Teknologjitë e Informacionit dhe të Komunikimit”,
              si pjesë e programeve të studimit të ofruara nga FTI,
              ka si objektiv të pajisë studentët e doktoratës me njohuri të thelluara,
              teorike, si dhe për kërkim shkencor në fushën e Teknologjisë së Informacionit dhe Komunikimit.
              Mbajtësi i diplomës “Doktor” kombinon aftësitë teorike, shkencore dhe komunikuese me kontekstin  kulturor,
              gjë që i jep atij mundësinë të punojë në funksione më profil  të lartë në nivel ndërkombëtar.</p>
            <p>
              Programi i studimeve Doktoratë në TIK ka për qëllim:
              <ul>
                <li>përgatitjen dhe kualifikimin e studiuesve dhe shkencëtarëve të rinj;</li>
                <li>kryerjen e veprimtarive studimore kërkimore e shkencore te lidhura ngushte me projekte kombëtare e ndërkombëtare dhe duke qenë partner me mjaft homologë të huaj;</li>
                <li>kualifikimin e vazhdueshëm shkencor të stafit akademik, duke krijuar vazhdimësi dhe qëndrueshmëri në cilësinë e stafit mësimdhënës;</li>
                <li>pjesëmarrje në kongrese dhe konferenca shkencore, seminare në fushat e TIK;</li>
                <li>kryerjen dhe mbështetjen e botimeve shkencore si: monografi, artikuj shkencor, libra, etj.</li>
              </ul>

      </p>

          </p>
        </section>
        <p>
          Për realizimin e objektivave, është ndërtuar një strategji në drejtim të zhvillimit institucional, të programeve të studimit, dhe kërkimit shkencor në bashkëpunim me drejtuesit e UPT.
          FTI ka një përvojë pozitive në lidhje me sistemet e menaxhimit të cilësisë dhe sistemet e sigurimit të cilësisë në institucione qofshin këto në fushën e ekonomisë,
          qofshin ato në fushën e administratës apo edukimit.
          Kjo përvojë është jo vetëm teorike,
          e lidhur me atë pjesë të stafit të kualifikuar në drejtim të menaxhimit industrial në përgjithësi dhe menaxhimit të cilësisë në veçanti,
          por edhe praktike, e lidhur me aplikime të sistemeve të menaxhimit në fusha të ndryshme.
          FTI ka plotësuar të gjitha strukturat drejtuese,
          si për sa i përket autoriteteve drejtuese, ashtu edhe organeve drejtuese, konform kërkesave të
          Ligjit Nr.80/2015 PËR ARSIMIN E LARTË DHE KËRKIMIN SHKENCOR NË INSTITUCIONET  E ARSIMIT TË LARTË NË REPUBLIKËN  E SHQIPËRISË.
        </p>
        <p>
          <p>Në FTI kryhet kontroll i brendshëm për cilësinë e mësimdhënies në dy këndvështrime:

            <ul>
              <li>i pari është ndjekja e të gjitha fazave të hartimit, rishikimit dhe miratimit të projekt – programeve të studimit të ndryshme, duke marrë opinionet e masës së pedagogëve dhe miratimi i tyre bëhet në formë kolegjiale. Kjo formë siguron cilësinë e hartimit të programit të studimit.</li>

              <li> i dyti është cilësia e implementimit të programit të studimit. Në këtë drejtim bëhen kontrolle, të cilat janë të orientuar drejt pjesëmarrjes së pedagogëve në mësim, por edhe drejt monitorimit të cilësisë së mësimdhënies të pedagogëve të ndryshëm sidomos të pedagogëve të rinj.</li></ul>


          </p>


          <p>FTI si fakultet që mbulon degë inxhinierike të Teknologjisë së Informacionit dhe Komunikimit,
            ka një bashkëpunim të fortë me Institute kërkimore shkencore në vend.
            FTI bashkëpunon ngushtësisht me agjencitë qeveritare si
            AKTI (Agjencia e Kërkimit, Teknologjisë dhe Informacionit),
            AKSHI (Agjencia Kombëtare e Strategjive të Informacionit),
            AKEP (Agjensia e Komunikimeve Elektronike dhe Postare),
            kompanitë e telekomunikacionit të Telefonisë Celulare dhe fikse në vend, Kompanitë e Internetit (ISP), Kompanitë televizive, etj.</p>





          <p>Ky bashkëpunim ka bërë të mundur pjesëmarrjen e studentëve në projekte kërkimore
            dhe kanë rritur ndjeshëm vlerat e punimeve të diplomave master,
            si dhe punimet e disertacioneve, në Fakultetin e  Teknologjisë së Informacionit.</p>*/}
          </p>
        </section>
        {/*<section>
    <h2>History</h2>
    <p>Established in [year], our university has a rich history of [mention significant milestones or accomplishments]. 
      We have been at the forefront of [mention relevant contributions or breakthroughs].</p>
  </section>

  <section>
    <h2>Programs and Degrees</h2>
    <p>We offer a wide range of academic programs and degrees, including undergraduate, graduate, and professional programs. 
      Our diverse curriculum covers disciplines such as [list disciplines], providing students with a comprehensive education.</p>
  </section>

  <section>
    <h2>Faculty and Staff</h2>
    <p>Our university boasts a dedicated team of faculty members and staff who are experts in their fields. 
      They are passionate about teaching, mentorship, and research, and are committed to nurturing the intellectual growth of our students.</p>
  </section>

  <section>
    <h2>Facilities and Resources</h2>
    <p>Our campus offers state-of-the-art facilities, including modern libraries, advanced research laboratories, sports complexes, 
      and comfortable student residences. We provide our students with access to the latest technology and resources to support their academic pursuits.</p>
  </section>

  <section>
    <h2>Student Life</h2>
    <p>At our university, we believe in holistic education. 
      Our vibrant student community actively participates in a variety of extracurricular activities, clubs, and organizations. 
      We encourage students to explore their interests, develop leadership skills, and forge lifelong friendships.</p>
  </section>

  <section>
    <h2>Research and Innovation</h2>
    <p>We are committed to fostering a culture of research and innovation. 
      Our faculty and students engage in groundbreaking research projects that address critical challenges in [mention relevant areas]. 
       We provide numerous opportunities for students to collaborate with faculty members on research initiatives.</p>
  </section>

  <section>
    <h2>Alumni Network</h2>
    <p>Our alumni network is a testament to the quality of education and the success of our graduates. 
      Our alumni have achieved remarkable milestones in their respective fields, 
      and they continue to contribute to the growth of our university. 
      We provide ongoing support and networking opportunities for our alumni community.</p>
  </section>

  <section>
    <h2>Accreditations and Rankings</h2>
    <p>Our university is accredited by [mention accrediting body] and consistently ranks among the top universities in 
      [mention relevant rankings]. These accolades reflect our commitment to delivering excellence in education and research.</p>
</section>*/}

        <section>
          <h2>Historiku</h2>

          {/*<button onClick={Misioni}></button>*/}
          <p>


            Departamenti i Elektronikës ishte njëri nga dy departamentet e Fakultetit të Inxhinierisë Elektrike të Universitetit Politeknik
            (krijuar me VKM Nr. 359, datë 21.09.1991 për organizimin e disa fakulteteve të universiteteve).
          </p>
          <p>
            Në vitn 1991 u bënë  përpjekje për unifikimin e planeve mësimore për dy vitet e para të të gjithë UPT.
            Ky plan mësimor u parashikua me 10 semestra mësim, ndërsa semestri i 11-të do të shërbente për përgatitjen e projektit të diplomës.
            Që në fillim lindën disa vështirësi dhe ndarje midis fakulteteve.
            Ky plan mësimor nuk u miratua dhe menjëherë u bënë ndryshimet e nevojshme për ta realizuar atë me 9+1 semestra.
            Me këtë plan mësimor vijoi deri në vitin 1995 përgatitja e inxhinierit elektronik të përgjithshëm.
          </p>
          <p>
            Në shtator 1992 dy katedrat e Degës së Elektronikës u ribashkuan në një të vetme.
            Një ribashkim i fundit i katedrave, sepse koha vërtetoi se ishte një hap i hedhur me nxitim.
            U deshën të kalonin vetëm dy/tre vite dhe pikërisht në vitin 1994 kërkesat e mëdha të ekonomisë, bënë të domosdoshëm organizimin e ri.
            Departamenti i Elektronikës kishte katër seksione: Seksioni i Bazave të Elektronikës, Seksioni i Telekomunikacionit, Seksioni i Automatikës dhe Seksioni i Inxhinierisë së Kompjuterave.
          </p>

          {/*<h3>Plani mësimor me tre drejtime</h3>*/}
          <a href="/Plani">Plani mësimor me tre drejtime</a>
          {/*<p>
            Në vitin 1996 u diplomuan inxhinierët e parë sipas tre drejtimeve: telekomunikacion, inxhinieri kompjuteri dhe automatikë.
            Plani mësimor i tanishëm ndahet në dy pjesë.
            Pjesa e parë përmbledh 7 semestrat e përbashkët dhe pjesa e dytë përmbledh tre semestrat e fundit,
            në të cilët zhvillohen lëndët sipas tre drejtimeve.
            Në këtë plan mësimor vihet re se të tre drejtimet kanë përsëri lëndë të përbashkëta,
            gjë që  lehtëson shumë si zhvillimin e lëndëve, ashtu edhe punësimin e inxhinierëve elektronikë
            <p>Ndryshimet kryesore në këtë plan mësimor u bënë sipas drejtimeve.</p>
            <p>Plani mësimor i drejtimit të Telekomunikacionit synon në përgatitjen e inxhinierëve,
              të cilët do shfrytëzojnë dhe  projektojnë sistemet e telekomunikacioneve.</p>
            <p>Plani mësimor i drejtimit të inxhinierisë së kompjuterave është mbështetur në zhvillimin e informatikës
              dhe përdorimin e gjërë të saj në automatizim dhe në shoqërinë e informacionit.</p>
            <p>Plani mësimor i drejtimit të automatikës synon të formojë një inxhinier të përgatitur për të realizuar,
              zhvilluar dhe drejtuar aparate dhe sisteme pa pjesëmarrjen e drejpërdrejtë të njeriut.</p>
            <p>Një ndihmesë të madhe në përgatitjen e programeve dhe të përpilimit të leksioneve të lëndëve të ndryshme për të tre drejtimet u dha nga Projekti TEMPUS.
              Ky projekt u zbatua gjatë viteve 1994-1996 dhe u mbështet nga Universiteti Politeknik Kombëtar i Athinës dhe Politekniku i Barit.
              Nga ky projekt laboratoret e Departamenti të Elektronikës u pajisën me kompjutera dhe me aparatura të reja,
              me të cilat u mbështetën të tre drejtimet e inxhinierisë elektronike.
              Në vitin 1999 u krye riorganizimi i departamentit në katër seksione:</p>
            <ul>
              <li>Seksioni i Bazave të Elektronikës</li>
              <li> Seksioni i Telekomunikacion</li>
              <li>Seksioni i Automatikës</li>
              <li>Seksioni i Inxhinierisë së Kompjuterave.</li>
            </ul>
            Strategjia e ecjes përpara e sistemit 3+2<br />

            Pas miratimit të marrëveshjes nga MASH, filloi zbatimi i projektit për krijimin e shkollës 3 vjeçare   në vitin 2002 në Departamentin e Elektronikës të Fakultetit të Inxhinierisë Elektrike. Projekti u financua nga Qeveria Italiana nëpërmjet CONICS,  drejpërdrejt nga Universiteti i Ankonës dhe Politekniku i Torinos. Projekti parashikonte formimin e tre tipe diplomash:
            <ol>
              <li>Inxhinier elektronik</li>
              <li>Inxhinier telekomunikacioni</li>
              <li>Inxhinieri informatike.</li></ol>

            Në vitin 2005 filloi zbatimi i plus 2,  për përgatitjen e inxhinierëve elektronikë, telekomunikacion dhe informatikë me diplomën e nivelit të dytë.
            Kjo diplomë është e cilësuar kështu në përputhje me ligjin e arsimit të lartë Nr.9741 datë 21.5. 2007.

            <p>Në dhjetor 2007 u krijua Fakulteti i Teknologjisë së Informacionit mbi bazën e tre deparatamenteve:</p>
            <ol>
              <li>Departamenti i Elektronikës dhe Telekomunikacionit (nga bashkimi i seksoneve të Elektronikës dhe të Telekomunikacionit).</li>
              <li>Departamenti i Inxhinierisë Informatike (në përbërje të të cilit  është edhe seksioni i informatikës ish pjesë e Departamentit të Matematikës).</li>
              <li>Qëndra për kërkim dhe zhvillim të teknologjisë së informacionit, grupi i ish INIMA-s.</li>
            </ol>

</p>*/}
        </section>
      </div>
    </div>
  )
}
