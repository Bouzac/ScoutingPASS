var config_data = {
  "dataFormat": "tsv", "title": "Scouting PASS 2026", "page_title": "REBUILT", "checkboxAs": "10",
  "prematch": [
    { "name": "Scouteur", "code": "s", "type": "scout", "size": 5, "maxSize": 5, "required": "true" },
    { "name": "Match", "code": "m", "type": "match", "min": 1, "max": 150, "required": "true" },
    { "name": "Équipe", "code": "t", "type": "team", "min": 1, "max": 99999, "required": "true" },
    { "name": "Alliance", "code": "a", "type": "alliance", "required": "true" }
  ],
  "auton": [
    { "name": "Quitté zone de départ", "code": "am", "type": "bool" },
    { "name": "Positions de tir", "code": "asl", "type": "clickable_image", "filename": "2026/half_field.png", "dimensions": "7 10" },
    { "name": "Fuel Marqué", "code": "afs", "type": "counter", "altInc1": 5, "altInc2": 10 },
    { "name": "Fait des passes", "code": "apn", "type": "bool" },
    { "name": "Grimpée Auto (Niveau 1)", "code": "acl", "type": "bool" }
  ],
  "teleop": [
    { "name": "Positions de tir", "code": "tsl", "type": "clickable_image", "filename": "2026/half_field.png", "dimensions": "7 10" },
    { "name": "Fuel Marqué", "code": "tfs", "type": "counter", "altInc1": 5, "altInc2": 10 },
    { "name": "Stratégie de passes", "code": "pas", "type": "radio", "choices": { "n": "Aucune<br>", "o": "Occasionnel<br>", "f": "Feeder principal" }, "defaultValue": "n" },
    { "name": "Ramasse au Sol", "code": "puf", "type": "bool" },
    { "name": "Ramasse au Dépôt", "code": "pud", "type": "bool" }
  ],
  "postmatch": [
    { "name": "Niveau de Grimpée", "code": "cl", "type": "radio", "choices": { "0": "Aucune<br>", "1": "Niveau 1<br>", "2": "Niveau 2<br>", "3": "Niveau 3" }, "defaultValue": "0" },
    { "name": "Vitesse du robot", "code": "spd", "type": "radio", "choices": { "1": "Lent<br>", "2": "Moyen<br>", "3": "Rapide" }, "defaultValue": "2" },
    { "name": "Qualité en Défense", "code": "def", "type": "radio", "choices": { "x": "N'a pas défendu<br>", "1": "Faible<br>", "2": "Bonne<br>", "3": "Excellente" }, "defaultValue": "x" },
    { "name": "Pénalités", "code": "pen", "type": "radio", "choices": { "n": "Aucune/Rare<br>", "o": "Quelques unes<br>", "e": "Trop (Nuit à l'alliance)" }, "defaultValue": "n" },
    { "name": "Bris mécanique", "code": "brk", "type": "bool" },
    { "name": "Commentaires", "code": "co", "type": "text", "size": 15, "maxSize": 55 }
  ]
};
