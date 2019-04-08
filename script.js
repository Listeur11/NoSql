db.createCollection('appartements');

var object = {
    "title": "titre",
    "type": "Appartement",
    "description": "description",
    "location": {
        "address": "Adresse",
        "city": "City",
        "cp": "31200",
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
                    "type": "fridge",
                    "years":"2017" ,
                    "capacity": 120,
                    "size": 1.60
                },
                {
                    "name": "Dyson V10",
                    "type": "Aspirateur",
                    "years":"2018" ,
                    "capacity": 4,
                    "size": 1.60
                }
                
            ]
        },
        {
            "name": "ch1",
            "surface": 22,
            "window": 2,
            "equipements": [
                {
                    "name": "Dyson V10",
                    "type": "Aspirateur",
                    "years":"2018" ,
                    "capacity": 4,
                    "size": 1.60
                }
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

function findByPiecesCOunt(piecesCount) {
    // find appartements greater than X pieces
    db.appartements.find({'pieces': {$size: piecesCount}});

}

// Function to find appartements by city
function findByCity(city) {
    print('Searching appartements in ' + city)
    var appartements = db.appartements.find({'location.city': city}).pretty().toArray();
    //printjson(appartements)
    print('Found ' + appartements.length + ' appartements in ' + city)
}

function name(piecesCount) {
    print('Searching appartements with ' + piecesCount + ' pieces')
    db.appartements.find({'location.city': piecesCount}).toArray(function(err, results) {print('a');print(err)});
}

db.appartements.find({'title': 'titre'}).toArray(function(err, results) {print('a');print(err)});


// Function to find appartements with an equipement type
function findEquipementType(equipement) {
    print('Searching appartements with ' + equipement)
    db.appartements.find({'location.city': 'City'}).toArray()then((res) => {
        printjson(res)
    });

}

function findEquipementName(equipement) {
    print('Searching appartements with ' + equipement)
    var apparts = db.appartements.find({'pieces.equipements.name': equipement});

    apparts += db.appartements.find({'pieces.equipements' : equipement})

    printjson(apparts);
}

function findEquipementName(equipement) {
    print('Searching appartements with ' + equipement)

}

function findInfos(infos,value){
        infos = 'infos'+infos
        print('Searching appartements with ' + infos + ' = ' + value)
        db.appartements.find({infos: value}).toArray()then((res) => {
            printjson(res)
        });

}