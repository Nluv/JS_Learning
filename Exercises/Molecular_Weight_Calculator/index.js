const elements = [];
const Hydrogen = arrayLoad("1", "Hydrogen", "H", "1008", "composed of the Greek elements hydro- and -gen meaning 'water-forming'", "0.00008988", "14.01", "20.28");
const Helium = arrayLoad("2", "Helium", "He", "4.002602", "the Greek helios, 'sun'", "0.0001785", "", "4.22");
const Lithium = arrayLoad("3", "Lithium", "Li", "6.94", "the Greek lithos, 'stone'", "0.534", "453.69", "1560");
const Beryllium = arrayLoad("4", "Beryllium", "Be", "9.0121831", "beryl, a mineral", "1.85", "1560", "2742");
const Boron = arrayLoad("5", "Boron", "B", "10.81", "borax, a mineral", "2.34", "2349", "4200");
const Carbon = arrayLoad("6", "Carbon", "C", "12011", "the Latin carbo, 'coal'", "2267", "3800", "4300");
const Nitrogen = arrayLoad("7", "Nitrogen", "N", "14007", "the Greek nitron and '-gen' meaning 'niter-forming'", "0.0012506", "63.15", "77.36");
const Oxygen = arrayLoad("8", "Oxygen", "O", "15999", "from the Greek oxy-, both 'sharp' and 'acid', and -gen, meaning 'acid-forming'", "0.001429", "54.36", "90.20");
const Fluorine = arrayLoad("9", "Fluorine", "F", "18.998403163", "the Latin fluere, 'to flow'", "0.001696", "53.53", "85.03");
const Neon = arrayLoad("10", "Neon", "Ne", "20.1797", "the Greek neos, meaning 'new'", "0.0008999", "24.56", "27.07");
const Sodium = arrayLoad("11", "Sodium", "Na", "22.98976928", "the English word soda (natrium in Latin)", "0.971", "370.87", "1156");
const Magnesium = arrayLoad("12", "Magnesium", "Mg", "24305", "Magnesia, a district of Eastern Thessaly in Greece", "1738", "923", "1363");
const Aluminium = arrayLoad("13", "Aluminium", "Al", "26.9815385", "from alumina, a compound (originally aluminum)", "2698", "933.47", "2792");
const Silicon = arrayLoad("14", "Silicon", "Si", "28085", "from the Latin silex, 'flint' (originally silicium)", "23296", "1687", "3538");
const Phosphorus = arrayLoad("15", "Phosphorus", "P", "30.973761998", "the Greek phoosphoros, 'carrying light'", "1.82", "317.30", "550");
const Sulfur = arrayLoad("16", "Sulfur", "S", "32.06", "the Latin sulphur, 'fire and brimstone'", "2067", "388.36", "717.87");
const Chlorine = arrayLoad("17", "Chlorine", "Cl", "35.45", "the Greek chloros, 'greenish yellow'", "0.003214", "171.6", "239.11");
const Argon = arrayLoad("18", "Argon", "Ar", "39.948", "the Greek argos, 'idle'", "0.0017837", "83.80", "87.30");
const Potassium = arrayLoad("19", "Potassium", "K", "39.0983", "New Latin potassa, 'potash' (kalium in Latin)", "0.862", "336.53", "1032");
const Calcium = arrayLoad("20", "Calcium", "Ca", "40.078", "the Latin calx, 'lime'", "1.54", "1115", "1757");
const Scandium = arrayLoad("21", "Scandium", "Sc", "44.955908", "Scandia, the Latin name for Scandinavia", "2989", "1814", "3109");
const Titanium = arrayLoad("22", "Titanium", "Ti", "47.867", "Titans, the sons of the Earth goddess of Greek mythology", "4.54", "1941", "3560");
const Vanadium = arrayLoad("23", "Vanadium", "V", "50.9415", "Vanadis, an Old Norse name for the Scandinavian goddess Freyja", "6.11", "2183", "3680");
const Chromium = arrayLoad("24", "Chromium", "Cr", "51.9961", "the Greek chroma, 'color'", "7.15", "2180", "2944");
const Manganese = arrayLoad("25", "Manganese", "Mn", "54.938044", "corrupted from magnesia negra, see Magnesium", "7.44", "1519", "2334");
const Iron = arrayLoad("26", "Iron", "Fe", "55.845", "English word (ferrum in Latin)", "7874", "1811", "3134");
const Cobalt = arrayLoad("27", "Cobalt", "Co", "58.933194", "the German word Kobold, 'goblin'", "8.86", "1768", "3200");
const Nickel = arrayLoad("28", "Nickel", "Ni", "58.6934", "from Swedish kopparnickel, containing the German word Nickel, 'goblin'", "8912", "1728", "3186");
const Copper = arrayLoad("29", "Copper", "Cu", "63.546", "English word (Latin cuprum)", "8.96", "1357.77", "2835");
const Zinc = arrayLoad("30", "Zinc", "Zn", "65.38", "the German Zink", "7134", "692.88", "1180");
const Gallium = arrayLoad("31", "Gallium", "Ga", "69.723", "Gallia, the Latin name for France", "5907", "3029146", "2673");
const Germanium = arrayLoad("32", "Germanium", "Ge", "72.63", "Germania, the Latin name for Germany", "5323", "1211.40", "3106");
const Arsenic = arrayLoad("33", "Arsenic", "As", "74.921595", "English word (Latin arsenicum)", "5776", "1090", "887");
const Selenium = arrayLoad("34", "Selenium", "Se", "78.971", "the Greek selene, 'moon'", "4809", "453", "958");
const Bromine = arrayLoad("35", "Bromine", "Br", "79904", "the Greek bromos, 'stench'", "3122", "265.8", "332.0");
const Krypton = arrayLoad("36", "Krypton", "Kr", "83.798", "the Greek kryptos, 'hidden'", "0.003733", "115.79", "119.93");
const Rubidium = arrayLoad("37", "Rubidium", "Rb", "85.4678", "the Latin rubidus, 'deep red'", "1532", "312.46", "961");
const Strontium = arrayLoad("38", "Strontium", "Sr", "87.62", "Strontian, a small town in Scotland", "2.64", "1050", "1655");
const Yttrium = arrayLoad("39", "Yttrium", "Y", "88.90584", "Ytterby, Sweden", "4469", "1799", "3609");
const Zirconium = arrayLoad("40", "Zirconium", "Zr", "91.224", "Persian Zargun, 'gold-colored'; German Zirkoon, 'jargoon'", "6506", "2128", "4682");
const Niobium = arrayLoad("41", "Niobium", "Nb", "92.90637", "Niobe, daughter of king Tantalus from Greek mythology", "8.57", "2750", "5017");
const Molybdenum = arrayLoad("42", "Molybdenum", "Mo", "95.95", "the Greek molybdos meaning 'lead'", "10.22", "2896", "4912");
const Technetium = arrayLoad("43", "Technetium", "Tc", "98X", "the Greek tekhnètos meaning 'artificial'", "11.5", "2430", "4538");
const Ruthenium = arrayLoad("44", "Ruthenium", "Ru", "101.07", "Ruthenia, the New Latin name for Russia", "12.37", "2607", "4423");
const Rhodium = arrayLoad("45", "Rhodium", "Rh", "102.9055", "the Greek rhodos, meaning 'rose coloured'", "12.41", "2237", "3968");
const Palladium = arrayLoad("46", "Palladium", "Pd", "106.42", "the then recently discovered asteroid Pallas, considered a planet at the time", "12.02", "1828.05", "3236");
const Silver = arrayLoad("47", "Silver", "Ag", "107.8682", "English word (argentum in Latin)", "10501", "1234.93", "2435");
const Cadmium = arrayLoad("48", "Cadmium", "Cd", "112.414", "the New Latin cadmia, from King Kadmos", "8.69", "594.22", "1040");
const Indium = arrayLoad("49", "Indium", "In", "114.818", "indigo", "7.31", "429.75", "2345");
const Tin = arrayLoad("50", "Tin", "Sn", "118.71", "English word (stannum in Latin)", "7287", "505.08", "2875");
const Antimony = arrayLoad("51", "Antimony", "Sb", "121.76", "uncertain: perhaps from the Greek anti, 'against', and monos, 'alone', or the Old French antimoine, 'Monk's bane' (stibium in Latin)", "6685", "903.78", "1860");
const Tellurium = arrayLoad("52", "Tellurium", "Te", "127.6", "Latin tellus, 'earth'", "6232", "722.66", "1261");
const Iodine = arrayLoad("53", "Iodine", "I", "126.90447", "French iode (after the Greek ioeides, 'violet')", "4.93", "386.85", "457.4");
const Xenon = arrayLoad("54", "Xenon", "Xe", "131.293", "the Greek xenos, 'strange'", "0.005887", "161.4", "165.03");
const Caesium = arrayLoad("55", "Caesium", "Cs", "132.90545196", "the Latin caesius, 'sky blue'", "1873", "301.59", "944");
const Barium = arrayLoad("56", "Barium", "Ba", "137.327", "the Greek barys, 'heavy'", "3594", "1000", "2170");
const Lanthanum = arrayLoad("57", "Lanthanum", "La", "138.90547", "the Greek lanthanein, 'to lie hidden'", "6145", "1193", "3737");
const Cerium = arrayLoad("58", "Cerium", "Ce", "140.116", "the then recently discovered asteroid Ceres, considered a planet at the time", "6.77", "1068", "3716");
const Praseodymium = arrayLoad("59", "Praseodymium", "Pr", "140.90766", "the Greek praseios didymos meaning 'green twin'", "6773", "1208", "3793");
const Neodymium = arrayLoad("60", "Neodymium", "Nd", "144.242", "the Greek neos didymos meaning 'new twin'", "7007", "1297", "3347");
const Promethium = arrayLoad("61", "Promethium", "Pm", "145X", "Prometheus of Greek mythology who stole fire from the Gods and gave it to humans", "7.26", "1315", "3273");
const Samarium = arrayLoad("62", "Samarium", "Sm", "150.36", "Samarskite, the name of the mineral from which it was first isolated", "7.52", "1345", "2067");
const Europium = arrayLoad("63", "Europium", "Eu", "151.964", "Europe", "5243", "1099", "1802");
const Gadolinium = arrayLoad("64", "Gadolinium", "Gd", "157.25", "Johan Gadolin, chemist, physicist and mineralogist", "7895", "1585", "3546");
const Terbium = arrayLoad("65", "Terbium", "Tb", "158.92535", "Ytterby, Sweden", "8229", "1629", "3503");
const Dysprosium = arrayLoad("66", "Dysprosium", "Dy", "162.5", "the Greek dysprositos, 'hard to get'", "8.55", "1680", "2840");
const Holmium = arrayLoad("67", "Holmium", "Ho", "164.93033", "Holmia, the New Latin name for Stockholm", "8795", "1734", "2993");
const Erbium = arrayLoad("68", "Erbium", "Er", "167.259", "Ytterby, Sweden", "9066", "1802", "3141");
const Thulium = arrayLoad("69", "Thulium", "Tm", "168.93422", "Thule, the ancient name for Scandinavia", "9321", "1818", "2223");
const Ytterbium = arrayLoad("70", "Ytterbium", "Yb", "173.045", "Ytterby, Sweden", "6965", "1097", "1469");
const Lutetium = arrayLoad("71", "Lutetium", "Lu", "174.9668", "Lutetia, the Latin name for Paris", "9.84", "1925", "3675");
const Hafnium = arrayLoad("72", "Hafnium", "Hf", "178.49", "Hafnia, the New Latin name for Copenhagen", "13.31", "2506", "4876");
const Tantalum = arrayLoad("73", "Tantalum", "Ta", "180.94788", "King Tantalus, father of Niobe from Greek mythology", "16654", "3290", "5731");
const Tungsten = arrayLoad("74", "Tungsten", "W", "183.84", "the Swedish tung sten, 'heavy stone' (W is wolfram, the old name of the tungsten mineral wolframite)", "19.25", "3695", "5828");
const Rhenium = arrayLoad("75", "Rhenium", "Re", "186.207", "Rhenus, the Latin name for the river Rhine", "21.02", "3459", "5869");
const Osmium = arrayLoad("76", "Osmium", "Os", "190.23", "the Greek osmè, meaning 'smell'", "22.61", "3306", "5285");
const Iridium = arrayLoad("77", "Iridium", "Ir", "192.217", "Iris, the Greek goddess of the rainbow", "22.56", "2719", "4701");
const Platinum = arrayLoad("78", "Platinum", "Pt", "195.084", "the Spanish platina, meaning 'little silver'", "21.46", "2041.4", "4098");
const Gold = arrayLoad("79", "Gold", "Au", "196.966569", "English word (aurum in Latin)", "19282", "1337.33", "3129");
const Mercury = arrayLoad("80", "Mercury", "Hg", "200.592", "the New Latin name mercurius, named after the Roman god (Hg from former name hydrargyrum, from Greek hydr-, 'water', and argyros, 'silver')", "135336", "234.43", "629.88");
const Thallium = arrayLoad("81", "Thallium", "Tl", "204.38", "the Greek thallos, 'green twig'", "11.85", "577", "1746");
const Lead = arrayLoad("82", "Lead", "Pb", "207.2", "English word (plumbum in Latin)", "11342", "600.61", "2022");
const Bismuth = arrayLoad("83", "Bismuth", "Bi", "208.98040X", "Uncertain, possibly Arabic or German", "9807", "544.7", "1837");
const Polonium = arrayLoad("84", "Polonium", "Po", "209X", "Named after the home country of Marie Curie (Polonia, Latin for Poland), who is also the discoverer of Radium", "9.32", "527", "1235");
const Astatine = arrayLoad("85", "Astatine", "At", "210X", "the Greek astatos, 'unstable'", "7", "575", "610");
const Radon = arrayLoad("86", "Radon", "Rn", "222X", "From radium, as it was first detected as an emission from radium during radioactive decay", "0.00973", "202", "211.3");
const Francium = arrayLoad("87", "Francium", "Fr", "223X", "Francia, the New Latin name for France", "1.87", "300", "950");
const Radium = arrayLoad("88", "Radium", "Ra", "226X", "the Latin radius, 'ray'", "5.5", "973", "2010");
const Actinium = arrayLoad("89", "Actinium", "Ac", "227X", "the Greek aktis, 'ray'", "10.07", "1323", "3471");
const Thorium = arrayLoad("90", "Thorium", "Th", "232.0377X", "Thor, the Scandinavian god of thunder", "11.72", "2115", "5061");
const Protactinium = arrayLoad("91", "Protactinium", "Pa", "231.03588X", "the Greek protos, 'first', and actinium, which is produced through the radioactive decay of protactinium", "15.37", "1841", "4300");
const Uranium = arrayLoad("92", "Uranium", "U", "238.02891X", "Uranus, the seventh planet in the Solar System", "18.95", "1405.3", "4404");
const Neptunium = arrayLoad("93", "Neptunium", "Np", "237X", "Neptune, the eighth planet in the Solar System", "20.45", "917", "4273");
const Plutonium = arrayLoad("94", "Plutonium", "Pu", "244X", "Pluto, a dwarf planet in the Solar System (then considered the ninth planet)", "19.84", "912.5", "3501");
const Americium = arrayLoad("95", "Americium", "Am", "243X", "The Americas, as the element was first synthesized on the continent, by analogy with europium", "13.69", "1449", "2880");
const Curium = arrayLoad("96", "Curium", "Cm", "247X", "Pierre Curie, a physicist, and Marie Curie, a physicist and chemist, named after great scientists by analogy with gadolinium", "13.51", "1613", "3383");
const Berkelium = arrayLoad("97", "Berkelium", "Bk", "247X", "Berkeley, California, where the element was first synthesized, by analogy with terbium", "14.79", "1259", "2900");
const Californium = arrayLoad("98", "Californium", "Cf", "251X", "California, where the element was first synthesized", "15.1", "1173", "1743");
const Einsteinium = arrayLoad("99", "Einsteinium", "Es", "252X", "Albert Einstein, physicist", "8.84", "1133", "1269");
const Fermium = arrayLoad("100", "Fermium", "Fm", "257X", "Enrico Fermi, physicist", "9.7", "1125", "");
const Mendelevium = arrayLoad("101", "Mendelevium", "Md", "258X", "Dmitri Mendeleev, chemist and inventor", "10.3", "1100", "");
const Nobelium = arrayLoad("102", "Nobelium", "No", "259X", "Alfred Nobel, chemist, engineer, innovator, and armaments manufacturer", "9.9", "1100", "");
const Lawrencium = arrayLoad("103", "Lawrencium", "Lr", "266X", "Ernest O. Lawrence, physicist", "15.6", "1900", "");
const Rutherfordium = arrayLoad("104", "Rutherfordium", "Rf", "267X", "Ernest Rutherford, chemist and physicist", "23.2", "2400", "5800");
const Dubnium = arrayLoad("105", "Dubnium", "Db", "268X", "Dubna, Russia", "29.3", "", "");
const Seaborgium = arrayLoad("106", "Seaborgium", "Sg", "269X", "Glenn T. Seaborg, scientist", "35", "", "");
const Bohrium = arrayLoad("107", "Bohrium", "Bh", "270X", "Niels Bohr, physicist", "37.1", "", "");
const Hassium = arrayLoad("108", "Hassium", "Hs", "277X", "Hesse, Germany, where the element was first synthesized", "40.7", "", "");
const Meitnerium = arrayLoad("109", "Meitnerium", "Mt", "278X", "Lise Meitner, physicist", "37.4", "", "");
const Darmstadtium = arrayLoad("110", "Darmstadtium", "Ds", "281X", "Darmstadt, Germany, where the element was first synthesized", "34.8", "", "");
const Roentgenium = arrayLoad("111", "Roentgenium", "Rg", "282X", "Wilhelm Conrad Röntgen, physicist", "28.7", "", "");
const Copernicium = arrayLoad("112", "Copernicium", "Cn", "285X", "Nicolaus Copernicus, astronomer", "23.7", "", "~357");
const Nihonium = arrayLoad("113", "Nihonium", "Nh", "286X", "the Japanese name for Japan, Nihon, where the element was first synthesized", "16", "700", "1400");
const Flerovium = arrayLoad("114", "Flerovium", "Fl", "289X", "Flerov Laboratory of Nuclear Reactions, part of JINR where the element was synthesized; itself named for Georgy Flyorov, physicist", "14", "", "~210");
const Moscovium = arrayLoad("115", "Moscovium", "Mc", "290X", "Moscow Oblast, Russia, where the element was first synthesized", "13.5", "700", "1400");
const Livermorium = arrayLoad("116", "Livermorium", "Lv", "293X", "Lawrence Livermore National Laboratory (in Livermore, California) which collaborated with JINR on its synthesis", "12.9", "709", "1085");
const Tennessine = arrayLoad("117", "Tennessine", "Ts", "294X", "Tennessee, United States", "7.2", "723", "883");
const Oganesson = arrayLoad("118", "Oganesson", "Og", "294X", "Yuri Oganessian, physicist", "5", "", "350");

function Element(number, name, symbol, atomic_weight, name_origin, density, boil_temp, melt_temp) {
      this.number = parseInt(number);
      this.name = name;
      this.symbol = symbol;
      this.atomic_weight = atomic_weight;
      this.name_origin = name_origin;
      this.density = density + ' g/cm³';
      this.melt_temp = melt_temp + ' (K)';
      this.boil_temp = boil_temp + ' (K)';
};

function arrayLoad(number, name, symbol, atomic_weight, name_origin, density, boil_temp, melt_temp) {
  for (let i = 0; i <= number; i++) {
    elements[number] = new Element(number, name, symbol, atomic_weight, name_origin, density, boil_temp, melt_temp);
  }
}

function printElementObject(value) {
  // Checking lowercase parameters and converting them to first letter uppercase
  let val = value[0].toUpperCase() + value.slice(1,value.length); 
  if (isFinite(val) && val > 0 && val <= 118) {
    return elements[val];
  } else {
    for (let i = 1; i <= elements.length; i++) {
          if (val == elements[i].name) {
            return elements[i];
          }
    }
  }
}
