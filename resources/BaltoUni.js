//Format Balaram fonts to Unicode

function BaltoUni(obj) {

      obj = obj.replace (/ä/g, "ā"); // long a
      obj = obj.replace (/é/g, "ī"); // long i
      obj = obj.replace (/ü/g, "ū"); // long u
      obj = obj.replace (/å/g, "ṛ"); // r cedilla
      obj = obj.replace (/è/g, "ṟ"); // long r cedilla
      obj = obj.replace (/ì/g, "ṅ"); // n dot over

      obj = obj.replace (/ñ/g, "ṣ"); // s cedilla
      obj = obj.replace (/ï/g, "ñ"); // n tilde

      obj = obj.replace (/ö/g, "ṭ"); // t cedilla
      obj = obj.replace (/ò/g, "ḍ"); // d cedilla
      obj = obj.replace (/ë/g, "ṇ"); // n cedilla
      obj = obj.replace (/ç/g, "ś"); // s accent

      obj = obj.replace (/à/g, "ṁ"); // m dot over (anusvara)
      obj = obj.replace (/ù/g, "ḥ"); // h cedilla (visarga)
      obj = obj.replace (/ÿ/g, "ḷ"); // l cedilla
      obj = obj.replace (/û/g, "ḻ"); // long l cedilla

      obj = obj.replace (/Ä/g, "Ā"); // long a
      obj = obj.replace (/É/g, "Ī"); // long i
      obj = obj.replace (/Ü/g, "Ū"); // long u
      obj = obj.replace (/Å/g, "Ṛ"); // r cedilla
      obj = obj.replace (/È/g, "Ṟ"); // long r cedilla
      obj = obj.replace (/Ì/g, "Ṅ"); // n dot over

      obj = obj.replace (/Ñ/g, "Ṣ"); // s cedilla
      obj = obj.replace (/Ï/g, "Ñ"); // n tilde

      obj = obj.replace (/Ö/g, "Ṭ"); // t cedilla
      obj = obj.replace (/Ò/g, "Ḍ"); // d cedilla
      obj = obj.replace (/Ë/g, "Ṇ"); // n cedilla
      obj = obj.replace (/Ç/g, "Ś"); // s accent

      obj = obj.replace (/À/g, "Ṁ"); // m dot over (anusvara)
      obj = obj.replace (/Ù/g, "Ḥ"); // h cedilla (visarga)
      obj = obj.replace (/ß/g, "Ḷ"); // l cedilla

    return obj;
}