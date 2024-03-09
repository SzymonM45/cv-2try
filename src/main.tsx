import React from 'react'
import ReactDOM from 'react-dom/client'

interface Experience {
    year: number;
    description: string;
}

interface CVData {
    photo: string;
    name: string;
    lastname: string;
    position: string;
    experience: Experience[];
    education: [];
}

const myCV: CVData = {
    photo: 'szymon.jpg',
    name: 'Szymon',
    lastName: 'Maciołek',
    position: 'Teacher',
    experience: [
        {
       year: 2005,
        description: 'ZSP nr 2 w Siedlcach'
        },{
        year: 2019, description: 'SCDiDN w Siedlcach'
        }
    ],
    education: [
        '1998 - I Lo w Siedlcach - matura',
        '2003 - Akademia Podlaska w Siedlcach - magister',
        '2018 - Uniwersytet w Siedlcach - doktor'
    ]
}



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>


  </React.StrictMode>,
)
