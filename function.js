list_of_countries = [

    "chile",
    "argentina",
    "bolivia",
    "paraguay",
    "uruguay",
    "brazil",
    "peru",
    "ecuador",
    "colombia",
    "venesuela",
    "guyana",
    "suriname",
    "trinidad_and_tobago",
    "panama",
    "costa_rica",
    "nicaragua",
    "honduras",
    "el_salvador",
    "guatemala",
    "belize",
    "cuba",
    "jamaica",
    "haiti",
    "dominican_republic",
    "puerto_rico",
    "mexico",
    "united_states",
    "canada",
    "greenland",
    "iceland",
    "lesotho",
    "eswatini",
    "south_africa",
    "madagascar",
    "mozambique",
    "zimbabwe",
    "botswana",
    "namibia",
    "angola",
    "zambia",
    "malawi",
    "tanzania",
    "dr_congo",
    "burundi",
    "rwanda",
    "kenya",
    "uganda",
    "congo",
    "gabon",
    "eq_guinea",
    "somalia",
    "ethiopia",
    "south_sudan",
    "djibouti",
    "central_african_republic",
    "cameroon",
    "eritrea",
    "sudan",
    "chad",
    "niger",
    "nigeria",
    "benin",
    "togo",
    "ghana",
    "cote_d_ivoire",
    "liberia",
    "sierra_leone",
    "guinea",
    "guinea_bissau",
    "senegal",
    "burkina_faso",
    "mali",
    "mauritania",
    "western_sahara",
    "morocco",
    "algeria",
    "libya",
    "tunisia",
    "egypt",
    "portugal",
    "spain",
    "france",
    "switz",
    "belgium",
    "austria",
    "czechia",
    "poland",
    "netherlands",
    "germany",
    "italy",
    "slovenia",
    "hungary",
    "ukraine",
    "slovakia",
    "belarus",
    "moldova",
    "romania",
    "croatia",
    "bosnia_herzegovina",
    "serbia",
    "montenegro",
    "albania",
    "north_macedonia", 
    "greece",
    "turkiye",
    "bulgaria",
    "ireland",
    "united_kingdom",
    "sweden",
    "norway",
    "finland",
    "estonia",
    "latvia",
    "lithuania",
    "russia",
    "norway",
    "cyprus",
    "syria",
    "lebanon",
    "israel",
    "jordan",
    "saudi_arabia",
    "yemen",
    "oman",
    "qatar",
    "united_arab_emirates",
    "iraq",
    "iran",
    "georgia",
    "armenia",
    "azerbaijan",
    "kazakhstan",
    "uzbekistan",
    "turkmenistan",
    "afghanistan",
    "pakistan",
    "tajikistan",
    "kyrgyzstan",
    "china",
    "mongolia",
    "nepal",
    "bhutan",
    "bangladesh",
    "india",
    "sri_lanka",
    "myanmar",
    "laos",
    "thailand",
    "cambodia",
    "vietnam",
    "malaysia",
    "philippines",
    "taiwan",
    "north_korea",
    "south_korea",
    "japan",
    "indonesia",
    "papua_new_guinea",
    "australia",
    "new_zealand"
]

var points = 0
var skips = 0
var current_country = ""
var current_map = "noName"

function randomize() {
    current_country = list_of_countries[Math.floor(Math.random()*list_of_countries.length)];
    document.querySelector(".country_name").textContent = current_country
}

function countryClick(countryName) {
    if (countryName == current_country) {
        points ++
    }
    else {
        points --
    }
    document.querySelector(".points_counter").textContent = points
    randomize()
}

function restart() {
    points = 0
    skips = 0
    document.querySelector(".points_counter").textContent = points
    document.querySelector(".skips_counter").textContent = skips
    randomize()
}

document.addEventListener('keydown', function(event) {
    if(event.key == "n") {
        if (current_map == "name") {
            current_map = "noName"
            document.querySelector(".map-image").src = "images/map_noNames.png"
        }
        else {
            current_map = "name"
            document.querySelector(".map-image").src = "images/map_withNames.png"
        }
    }
});
document.addEventListener('keydown', function(event) {
    if(event.key == "s") {
        randomize()
        skips ++
        document.querySelector(".skips_counter").textContent = skips
    }
});

randomize()