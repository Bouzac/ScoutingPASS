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
    { "name": "Longueur",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Largeur",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Base Pilotable",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "b": "Butterfly/Grashopper<br>",
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
    { "name": "Ratio de Swerve",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "L1 (8.14:1)<br>",
        "2": "L2 (6.75:1)<br>",
        "3": "L3 (6.12:1)<br>",
        "4": "L4 (5.14:1)<br>",
        "o": "Autre Ratio (dans les commentaires)<br>",
        "x": "Pas des Swerves"
      },
      "defaultValue":"x"
    },
    { "name": "Moteur Base Pilotable",
      "code": "mot",
      "type": "radio",
      "choices": {
        "n": "Neo<br>",
        "f": "Falcon<br>",
        "c": "CIM<br>",
        "x": "Autre<br>"
      },
      "defaultValue":"x"
    },
    { "name": "# de Batteries",
      "code": "nob",
      "type": "number"
    },
    { "name": "Floor Fuel",
      "code": "fpu",
      "type": "bool"
    },
    { "name": "Depot Fuel",
      "code": "dpu",
      "type": "bool"
    },
    { "name": "Outpost Fuel",
      "code": "opu",
      "type": "bool"
    },
    { "name": "Autos",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
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
}`;
