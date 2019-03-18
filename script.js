db.createCollection('appartements');

var object = {
    "title": "titre",
    "type": "Appartement",
    "description": "description",
    "location": {
        "address": "Adresse",
        "cp": "City",
        "country": "France"
    },
    "infos": {
        "pieces": 3,
        "surface": 60.50,
        "bedrooms": 2,
        "year": 2010,
        "floor": 1,
        "price": 190000
    },
    "pieces": [
        {
            "name": "cuisine",
            "surface": 7,
            "window": 3,
            "equipements": [
                {
                    "name": "Frigo",
                    "type": "Frigo",
                    "years":"2017" ,
                    "capacity": 120,
                    "size": 1.60,
                    "option": [
                        "tirroir",
                        "congélateur",
                        "silencieux"
                    ]
                },
                {
                    "name": "Plaques de cuisson",
                    "type": "Plaques ",
                    "years":"2019" ,
                    "capacity": "",
                    "size": 0.80,
                    "option": [
                        "4 feux",
                        "timer"
                    ]

                },{
                    "name": "Dyson V10",
                    "type": "Aspirateur",
                    "years":"2018" ,
                    "capacity": 4,
                    "size": 1.60,"option": [
                        "Tête nettoyanate",
                        "batterie",
                        "silencieux"
                    ]
                }
                
            ]
        },
        {
            "name": "salon",
            "surface": 22,
            "window": 2,
            "equipements": [
                "tele 4k",
                "homepod",
                "ps4"
            ]
        }
    ],
    "equipements": {
        "inside": [
            "interphone"
        ],
        "outside": [
            "garage",
            "cave"
        ]
    },
    "outside": [
        {
            "type": "Jardin",
            "surface": 6000.50,
            "water": true,
            "golf": true
        },
        {
            "type": "Terasse",
            "surface": 20.50
        }
    ],
    "other":[

    ]
}

db.appartements.insertOne(object)

// find appartements greater than 2 pieces
db.appartements.find({'pieces': {$size: 2}});

// find appartement wich have a DYSON V10

db.appartements.find({
    $where: 'this.pieces.length >= 2'
});