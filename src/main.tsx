import React from 'react'
import ReactDOM from 'react-dom/client'

interface Experience {
    year: number;
    description: string;
}

interface CVData {
    photo: string;
    name: string;
    lastName: string;
    position: string;
    experience: Experience[];
    education: string[];
}

const myCV: CVData = {
    photo: 'szymon.jpg',
    name: 'Szymon',
    lastName: 'Maciołek',
    position: 'Teacher',
    experience: [
        { year: 1998, description: 'Securitas Polska'},
        { year: 2004, description: 'Astra Zeneca'},
        {year: 2005, description: 'ZSP nr 2 w Siedlcach'},
        {year: 2019, description: 'SCDiDN w Siedlcach'}
    ],
    education: [
        '1998 - I Lo w Siedlcach - matura',
        '2003 - Akademia Podlaska w Siedlcach - magister',
        '2018 - Uniwersytet w Siedlcach - doktor'
    ]
}



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <main>
          <h1> CV {myCV.name} {myCV.lastName}</h1>
          <aside>
              <h2>Podstawowe dane</h2>
              <img src={myCV.photo} alt={` Photo of ${myCV.name} ${myCV.lastName}`}/>
              <p>{myCV.name} {myCV.lastName}</p>
              <small>{myCV.position}</small>
          </aside>
          <section>
              <h2>Doświadczenie</h2>
              <ul>
                  {myCV.experience.map(experience => <li key={experience.year}>{experience.year} - {experience.description}</li>)}
              </ul>
              <h2>Wykształcenie</h2>
              <ul>
                  {myCV.education.map((education, index) => <li key={index}>{education}</li>)}
              </ul>

          </section>
      </main>

  </React.StrictMode>,
)
