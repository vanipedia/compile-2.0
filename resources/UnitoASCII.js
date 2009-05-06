
        /****   Function to Convert Unicode to ASCII    ****/
        
UniToASCII = function(obj) {
    
    if (!/ā|ī|ū|ṛ|ṟ|ṅ|ṣ|ñ|ṭ|ḍ|ṇ|ś|ṁ|ḥ|ḷ|ḻ|Ā|Ī|Ū|Ṛ|Ṟ|Ṣ|Ñ|Ṭ|Ḍ|Ṇ|Ś|Ṁ|Ḥ|Ḷ/.test(obj)) { return obj; }

    obj = obj.replace(/ā/g, "a"); // long a
    obj = obj.replace(/ī/g, "i"); // long i
    obj = obj.replace(/ū/g, "u"); // long u
    obj = obj.replace(/ṛ/g, "r"); // r cedilla
    obj = obj.replace(/ṟ/g, "r"); // long r cedilla
    obj = obj.replace(/ṅ/g, "n"); // n dot over

    obj = obj.replace(/ṣ/g, "s"); // s cedilla
    obj = obj.replace(/ñ/g, "n"); // n tilde

    obj = obj.replace(/ṭ/g, "t"); // t cedilla
    obj = obj.replace(/ḍ/g, "d"); // d cedilla
    obj = obj.replace(/ṇ/g, "n"); // n cedilla
    obj = obj.replace(/ś/g, "s"); // s accent

    obj = obj.replace(/ṁ/g, "m"); // m dot over (anusvara)
    obj = obj.replace(/ḥ/g, "h"); // h cedilla (visarga)
    obj = obj.replace(/ḷ/g, "l"); // l cedilla
    obj = obj.replace(/ḻ/g, "l"); // long l cedilla

    obj = obj.replace(/Ā/g, "A"); // long a
    obj = obj.replace(/Ī/g, "I"); // long i
    obj = obj.replace(/Ū/g, "U"); // long u
    obj = obj.replace(/Ṛ/g, "R"); // r cedilla
    obj = obj.replace(/Ṟ/g, "R"); // long r cedilla
    obj = obj.replace(/&#7748;/g, "N"); // n dot over

    obj = obj.replace(/Ṣ/g, "S"); // s cedilla
    obj = obj.replace(/Ñ/g, "N"); // n tilde

    obj = obj.replace(/Ṭ/g, "T"); // t cedilla
    obj = obj.replace(/Ḍ/g, "D"); // d cedilla
    obj = obj.replace(/Ṇ/g, "N"); // n cedilla
    obj = obj.replace(/Ś/g, "S"); // s accent

    obj = obj.replace(/Ṁ/g, "M"); // m dot over (anusvara)
    obj = obj.replace(/Ḥ/g, "H"); // h cedilla (visarga)
    obj = obj.replace(/Ḷ/g, "L"); // l cedilla 
    
    return obj;
}