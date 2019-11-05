class Genre {
    constructor(name, femaleNames, maleNames, surnames) {
        this.name = name;
        this.femaleNames = femaleNames;
        this.maleNames = maleNames;
        this.surnames = surnames;
    }

    get randomFemaleName() {
        var randomIndex = Math.floor(Math.random() * this.femaleNames.length);
        return this.femaleNames[randomIndex];
    }

    get randomMaleName() {
        var randomIndex = Math.floor(Math.random() * this.maleNames.length);
        return this.maleNames[randomIndex];
    }

    get randomSurname() {
        var randomIndex = Math.floor(Math.random() * this.surnames.length);
        return this.surnames[randomIndex];
    }
}

// Top Ten Surnames in 1990s
var topTenSurnames1990 = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor"];

// Range: 1900-1949
var progressiveEra = new Genre( //
    "progressive", //
    ["Mary", "Helen", "Dorothy", "Margaret", "Betty", "Ruth", "Barbara", "Shirley", "Linda", "Patricia"], //
    ["John", "William", "James", "Robert", "Charles", "George", "Richard", "Donald", "David", "Thomas"], //
    topTenSurnames1990);

// Range: 1950 - 1999
var midCenturyEra = new Genre( //
    "midCentury", //
    ["Mary", "Linda", "Lisa", "Susan", "Jennifer", "Amy", "Jessica", "Amanda", "Ashley", "Emily"], //
    ["James", "Michael", "David", "John", "Christopher", "Jason", "Matthew", "Joshua", "Jacob", "Nicholas"], //
    topTenSurnames1990);

// Range: 2000-2018
var newMillenniumEra = new Genre( //
    "newMillenium", //
    ["Jessica", "Ashley", "Emily", "Sarah", "Samantha", "Emma", "Sophia", "Olivia", "Isabella", "Ava"], //
    ["Micheal", "Christopher", "Matthew", "Joshua", "Jacob", "Noah", "Liam", "Mason", "William", "Ethan"], //
    topTenSurnames1990);

var genres = [progressiveEra, midCenturyEra, newMillenniumEra];
var selectedGenre = genres[0];

function selectRandomGenre() {
    var randomIndex = Math.floor(Math.random() * genres.length);
    selectedGenre = genres[randomIndex];
}

function updateSelectedGenre() {
    var filter = document.getElementById("genre-filter").value;

    switch (filter) {
        case "progressive-us":
            selectedGenre = progressiveEra;
            break;
        case "mid-century-us":
            selectedGenre = midCenturyEra;
            break;
        case "new-millenium-us":
            selectedGenre = newMillenniumEra;
            break;
        default:
            selectRandomGenre();
            break;
    }
}

const Sex = Object.freeze({
    FEMALE: "female",
    MALE: "male"
});
var sexes = [Sex.FEMALE, Sex.MALE];
var selectedSex = sexes[0];

function selectRandomSex() {
    var randomIndex = Math.floor(Math.random() * sexes.length);
    selectedSex = sexes[randomIndex];
}

var firstName = selectedGenre.randomFemaleName;
var surname = selectedGenre.randomSurname;
var fullName = firstName + " " + surname;

function selectRandomFirstName() {
    updateSelectedGenre();
    updateSelectedSex();

    switch (selectedSex) {
        case Sex.FEMALE:
            firstName = selectedGenre.randomFemaleName;
            break;
        case Sex.MALE:
            firstName = selectedGenre.randomMaleName;
            break;
        default:
            break;
    }

    updateNameDisplay();
}

function updateSelectedSex() {
    var filter = document.getElementById("sex-filter").value;

    switch (filter) {
        case "female":
            selectedSex = Sex.FEMALE;
            break;
        case "male":
            selectedSex = Sex.MALE;
            break;
        default:
            selectRandomSex();
            break;
    }
}

function updateNameDisplay() {
    document.getElementById("name-display").innerHTML = fullName;
}

function selectRandomSurname() {
    surname = selectedGenre.randomSurname;
    updateNameDisplay();
}

function selectRandomFullName() {
    selectRandomFirstName();
    selectRandomSurname();
    fullName = firstName + " " + surname;

    updateNameDisplay();
}