var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title": "REBUILT",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Initiales Scouteur",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Événement",
      "code": "e",
      "type": "event",
      "defaultValue": "QCMO",
      "required": "true"
    },
    { "name": "Niveau du Match",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Qualifs<br>",
        "sf": "Demi-finales<br>",
        "f": "Finales"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match n°",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Rouge-1",
        "b1": "Bleu-1<br>",
        "r2": "Rouge-2",
        "b2": "Bleu-2<br>",
        "r3": "Rouge-3",
        "b3": "Bleu-3"
      },
      "required": "true"
    },
    { "name": "Équipe n°",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Position de départ (Auto)",
      "code": "as",
      "type": "clickable_image",
      "filename": "2026/half_field.png",
      "clickRestriction": "one",
      "dimensions": "7 10",
      "allowableResponses": "4 11 18 25 32 39 46 53 60 67",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Positions de tir (Auto)",
      "code": "asl",
      "type": "clickable_image",
      "filename": "2026/half_field.png",
      "dimensions": "7 10",
      "allowableResponses": "1 2 3 4 8 9 10 11 15 16 17 18 22 23 24 25 29 30 31 32 36 37 38 39 43 44 45 46 50 51 52 53 57 58 59 60 64 65 66 67",
      "expectedMax": 5,
      "shape": "circle 5 black red true"
    },
    { "name": "Fuel Marqué",
      "code": "afs",
      "expectedMax": 32,
      "altInc1": 10,
      "altInc2": 5,
      "type": "counter"
    },
    { "name": "Passe depuis Zone Neutre",
      "code": "apn",
      "expectedMax": 60,
      "altInc1": 10,
      "altInc2": 5,
      "type": "counter"
    },
    { "name": "Grimpée (L1)",
      "code": "ac",
      "type": "radio",
      "choices": {
        "c": "Réussie<br>",
        "a": "Tentée<br>",
        "x": "Non tentée"
      },
      "defaultValue": "x"
    },
    { "name": "Ramassage au Dépôt",
      "code": "afd",
      "type": "bool"
    },
    { "name": "Ramassage à l'Avant-poste",
      "code": "afo",
      "type": "bool"
    },
    { "name": "Ramassage en Zone Neutre",
      "code": "aff",
      "type": "bool"
    }
  ],
  "teleop": [
    { "name": "Positions de tir",
      "code": "tsl",
      "type": "clickable_image",
      "filename": "2026/half_field.png",
      "dimensions": "7 10",
      "allowableResponses": "1 2 3 4 8 9 10 11 15 16 17 18 22 23 24 25 29 30 31 32 36 37 38 39 43 44 45 46 50 51 52 53 57 58 59 60 64 65 66 67",
      "expectedMax": 25,
      "shape": "circle 5 black red true"
    },
    { "name": "Fuel Marqué",
      "code": "tfs",
      "expectedMax": 150,
      "altInc1": 10,
      "altInc2": 5,
      "type": "counter"
    },
    { "name": "Passe depuis Zone Neutre",
      "code": "pnz",
      "expectedMax": 250,
      "altInc1": 10,
      "altInc2": 5,
      "type": "counter"
    },
    { "name": "Passe depuis Zone Alliance Adv.",
      "code": "poa",
      "expectedMax": 250,
      "altInc1": 10,
      "altInc2": 5,
      "type": "counter"
    },
    { "name": "Ramassage au Dépôt",
      "code": "tfd",
      "type": "bool"
    },
    { "name": "Ramassage à l'Avant-poste",
      "code": "tfo",
      "type": "bool"
    },
    { "name": "Ramassage au sol",
      "code": "tff",
      "type": "bool"
    }
  ],
  "endgame": [
    { "name": "Grimpée",
      "code": "tc",
      "type": "radio",
      "choices": {
        "1": "Niveau 1<br>",
        "2": "Niveau 2<br>",
        "3": "Niveau 3<br>",
        "a": "Tentée<br>",
        "x": "Non tentée"
      },
      "defaultValue": "x"
    }
  ],
  "postmatch": [
    { "name": "Compétence Pilote",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Peu efficace<br>",
        "a": "Moyen<br>",
        "v": "Très efficace<br>",
        "x": "Non observé"
      },
      "defaultValue": "x"
    },
    { "name": "Niveau de Défense",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Sous la moyenne<br>",
        "a": "Moyen<br>",
        "g": "Bon<br>",
        "e": "Excellent<br>",
        "x": "N'a pas défendu"
      },
      "defaultValue": "x"
    },
    { "name": "Vitesse",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (lent)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (rapide)"
      },
      "defaultValue":"3"
    },
    { "name": "A franchi la Bosse",
      "code": "bmp",
      "type": "bool"
    },
    { "name": "A franchi la Tranchée",
      "code": "tre",
      "type": "bool"
    },
    { "name": "Panne/Immobilisé",
      "code": "die",
      "type": "bool"
    },
    { "name": "Instable<br>(a failli basculer)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Bon partenaire<br>d'alliance ?",
      "tooltip": "Voudriez-vous ce robot dans votre alliance pour les éliminatoires ?",
      "code": "all",
      "type": "bool"
    },
    { "name": "A été défendu",
      "code": "def",
      "type": "bool"
    },
    { "name": "Pénalités excessives",
      "code": "pen",
      "type": "bool"
    },
    { "name": "Pourcentage de Fuel",
      "tooltip": "Quel pourcentage du fuel total de cette alliance ce robot a-t-il marqué ?",
      "code": "pct",
      "type": "number",
      "min": 0,
      "max": 100
    },
    { "name": "Commentaires",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  ]
}`;
