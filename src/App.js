import "./App.css";
import React, { useState } from "react";
import JobList from "./components/JobList.js";
import FilterMenu from "./components/FilterMenu.js";
import NavBar from "./components/NavBar.js";
import SortBar from "./components/SortBar";

import { useData } from "./utilities/firebase.js";
import "bootstrap/dist/css/bootstrap.min.css";

const jobList = {
  "Center for Talent Development: Clerical Aide 3": {
    "TERM AVAILABLE": "Spring 2022",
    "NUMBER OF POSITIONS AVAILABLE": "1",
    "LOCATION": "Northwestern - Evanston Campus",
    "WORK ARRANGEMENTS": "Remote",
    "DEPARTMENT": "Center for Talent Development",
    "JOB DESCRIPTION": "Work to support innovative online programming for gifted youth. Responsibilities may include internet research, data entry and database management, forms processing and correspondence with students and families. Opportunities to support other departments at the Center for Talent Development including the Summer department and the Civic Education Project as needed and desired. Hours flexible.",
    "QUALIFICATIONS": "Must be a Northwestern undergraduate student with a Federal Work-Study allotment for the 2021-2022 academic year (CAESAR > Financial Aid > View My Financial Aid > [2022].)",
    "PAY RATE": [
      14
    ],
    "CONTACT NAME": "Mishal Qureshi",
    "CONTACT PHONE NUMBER": "(847) 467-2572",
    "CONTACT EMAIL": "ctd-online@northwestern.edu",
    "URL": "https://undergradaid.northwestern.edu/work-study/jobs/on-campus-jobs/center-for-talent-development-clerical-aide-3.html"
  },
  "Athletics and Recreation: Student-Equipment Manager": {
    "TERM AVAILABLE": "Spring 2022",
    "NUMBER OF POSITIONS AVAILABLE": "6-8",
    "LOCATION": "Northwestern - Evanston Campus",
    "WORK ARRANGEMENTS": "In person only",
    "DEPARTMENT": "Athletics/ Equipment",
    "JOB DESCRIPTION": "This position is responsible for the facilitation of practice, storage, maintenance, cleaning, collection, inventory, and repair of football apparel and equipment. Must possess the ability to be an effective communicator. In addition, must possess the ability to work changing schedules that may include early mornings, evenings and/or weekends as necessary, access competitive sporting event sites that may involve overnight travel. Must be present at practice.",
    "QUALIFICATIONS": "Must be a Northwestern undergraduate student with a Federal Work-Study allotment for the 2021-2022 academic year (CAESAR > Financial Aid > View My Financial Aid > [YEAR].) NO EXPERIENCE NECESSARY. Priority registration is available. Must possess the ability to be an effective communicator; lift occasionally and/or up to 50 pounds.",
    "PAY RATE": [
      13
    ],
    "CONTACT NAME": "Eryk Jackson",
    "CONTACT PHONE NUMBER": "(847) 491-8874",
    "CONTACT EMAIL": "eryk.jackson@northwestern.edu",
    "URL": "https://undergradaid.northwestern.edu/work-study/jobs/on-campus-jobs/athletics-and-recreation-student-equipment-manager.html"
  },
  "Athletics and Recreation: Lifeguard": {
    "TERM AVAILABLE": "Spring 2022",
    "NUMBER OF POSITIONS AVAILABLE": " 30",
    "LOCATION": "Northwestern - Evanston Campus",
    "WORK ARRANGEMENTS ": "In-person",
    "DEPARTMENT": "Athletics and Recreation",
    "JOB DESCRIPTION": "As an essential part of our aquatics team, you will be responsible for the supervision of the Norris Aquatics Center. You'll be expected to demonstrate a high degree of competency in the skills, critical thinking, and knowledge necessary to prevent, prepare for, and respond to aquatic emergencies. You will also enforce safety policies that aid in keeping patrons of the aquatics center safe. More information available at nurecreation.com/jobs.",
    "QUALIFICATIONS": "Must be a Northwestern undergraduate student with a Federal Work-Study allotment for the 2021-2022 academic year (CAESAR > Financial Aid > View My Financial Aid > [2022].) Hold a current Lifeguard Training, First Aid, and CPR/AED for the Professional Rescuer certification.",
    "PAY RATE": [
      13.25
    ],
    "CONTACT NAME": "Ed Martig",
    "CONTACT PHONE NUMBER": "(847) 467-1470",
    "CONTACT EMAIL": "e-martig@northwestern.edu",
    "URL": "https://undergradaid.northwestern.edu/work-study/jobs/on-campus-jobs/athletics-and-recreation-lifeguard.html"
  },
  "Center for Interdisciplinary Exploration and Research in Astrophysics: Communications Aide": {
    "TERM AVAILABLE": "Spring 2022",
    "NUMBER OF POSITIONS AVAILABLE": "2",
    "LOCATION": "Northwestern - Evanston Campus",
    "WORK ARRANGEMENTS ": "Remote or In-Person",
    "DEPARTMENT": "Center for Interdisciplinary Exploration and Research in Astrophysics",
    "JOB DESCRIPTION": "For more on CIERA and to apply please visit our websiteciera.northwestern.edu/opportunities  ",
    "QUALIFICATIONS": "Must be a Northwestern undergraduate student with a Federal Work-Study allotment for the 2021-2022 academic year (CAESAR > Financial Aid > View My Financial Aid > [YEAR].) Preferred Skills",
    "PAY RATE": [
      13,
      15
    ],
    "CONTACT NAME": "Kari Frank",
    "CONTACT PHONE NUMBER": "847-467-3178",
    "CONTACT EMAIL": "ciera-jobs@northwestern.edu",
    "URL": "https://undergradaid.northwestern.edu/work-study/jobs/on-campus-jobs/center-for-interdisciplinary-exploration-and-research-in-astrophysics-communications-aide.html"
  },
  "Bienen School of Music - Concert Management Office: Technical Staff": {
    "TERM AVAILABLE": "Spring 2022",
    "NUMBER OF POSITIONS AVAILABLE": "10",
    "LOCATION": "Northwestern - Evanston Campus",
    "WORK ARRANGEMENTS": "In person only",
    "DEPARTMENT": "Bienen School Concert Management Office",
    "JOB DESCRIPTION": "Provides technical and production support for concerts, rehearsals, and other events at the Bienen School of Music, including stage set-up/set-change/strike, stage management, recording engineering, and live sound engineering. Technical staff are expected to become proficient in one or more of the following specialized rolesStage Manager, PA technician (live sound), and Recording Technician. When not fulfilling the duties associated with these roles, staff operate as Stage Techs.",
    "QUALIFICATIONS": "Must be a Northwestern undergraduate student with a Federal Work-Study allotment for the 2021-2022 academic year (CAESAR > Financial Aid > View My Financial Aid > [YEAR].)",
    "PAY RATE": [
      13,
      17
    ],
    "CONTACT NAME": "Laura Nielsen",
    "CONTACT PHONE NUMBER": "(847) 491-5441",
    "CONTACT EMAIL": "events.music@northwestern.edu",
    "URL": "https://undergradaid.northwestern.edu/work-study/jobs/on-campus-jobs/bienen-school-of-music---concert-management-office-technical-staff.html"
  }
}

const App = () => {
  // const [sortWage, setSortWage] = useState("")
  const [sortDirection, setSortDirection] = useState("");
  const [filterCategories, setFilterCategories] = useState([]);
  //const [jobList, loading, error] = useData("/");

  //if (error) return <h1>{error}</h1>;
  //if (loading) return <h1>Loading your jobs...</h1>;

  const jobCategories = Array.from(
    new Set(
      Object.values(jobList).map((j) => {
        return j.CATEGORY;
      })
    )
  );

  return (
    <div className="app-body">
      <NavBar />
      <div className="container">
        <div className="filters-and-jobs">
          <div className="filters-list">
            <FilterMenu
              jobCategories={jobCategories}
              filterCategories={filterCategories}
              setFilterCategories={setFilterCategories}
              sortDirection={sortDirection}
              setSortDirection={setSortDirection}
            />
          </div>
          <div className="cards-list">
            <JobList
              jobs={jobList}
              filterCategories={filterCategories}
              sortDirection={sortDirection}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
