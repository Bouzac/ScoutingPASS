var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title": "REBUILT",
  "pitConfig": "true",
  "prematch": [
    { "name": "Numéro d'équipe",
      "code": "t",
      "type": "number"
    },
    { "name": "Poids (lbs)",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Hauteur (pouces)",
      "code": "hgt",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Base Pilotable",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "m": "Mechanum<br>",
        "o": "Autre"
      },
      "defaultValue": "o"
    },
    { "name": "Autre Base",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Type de Ramassage (Intake)",
      "code": "itk",
      "type": "radio",
      "choices": {
        "i": "Interne (protégé)<br>",
        "e": "Externe (exposé)<br>",
        "n": "Aucun"
      },
      "defaultValue":"i"
    },
    { "name": "# de Batteries",
      "code": "nob",
      "type": "number"
    },
    { "name": "Ramasse au sol (Floor)",
      "code": "fpu",
      "type": "bool"
    },
    { "name": "Prend au Dépôt",
      "code": "dpu",
      "type": "bool"
    },
    { "name": "Prend à l'Avant-poste",
      "code": "opu",
      "type": "bool"
    },
    { "name": "Autos (Qu'est-ce qu'ils font?)",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    {
      "name": "Accrochage",
      "code": "clb",
      "type": "Radio",
      "choices": {
          "1": "L1<br>",
          "2": "L2<br>",
          "3": "L3<br>",
          "o": "Aucun"
      }
    },
    { "name": "Commentaires",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}
`;
