function BaltoUni(targ) {

    targ = targ.replace (/ä/g, "&#257;"); // long i
	targ = targ.replace (/é/g, "&#299;"); // long a
	targ = targ.replace (/ü/g, "&#363;"); // long u
	targ = targ.replace (/å/g, "&#7771;"); // r cedilla
	targ = targ.replace (/è/g, "&#7773;"); // long r cedilla
	targ = targ.replace (/ì/g, "&#7749;"); // n dot over

	targ = targ.replace (/ñ/g, "&#7779;"); // s cedilla
	targ = targ.replace (/ï/g, "&#xf1;"); // n tilde

	targ = targ.replace (/ö/g, "&#7789;"); // t cedilla
	targ = targ.replace (/ò/g, "&#7693;"); // d cedilla
	targ = targ.replace (/ë/g, "&#7751;"); // n cedilla
	targ = targ.replace (/ç/g, "&#347;"); // s accent

	targ = targ.replace (/à/g, "&#7745;"); // m dot over (anusvara)
	targ = targ.replace (/ù/g, "&#7717;"); // h cedilla (visarga)
	targ = targ.replace (/ÿ/g, "&#7735;"); // l cedilla
	targ = targ.replace (/û/g, "&#7737;"); // long l cedilla

	targ = targ.replace (/Ä/g, "&#256;"); // long a
	targ = targ.replace (/É/g, "&#298;"); // long i
	targ = targ.replace (/Ü/g, "&#362;"); // long u
	targ = targ.replace (/Å/g, "&#7770;"); // r cedilla
	targ = targ.replace (/È/g, "&#7772;"); // long r cedilla
	targ = targ.replace (/Ì/g, "&#7748;"); // n dot over

	targ = targ.replace (/Ñ/g, "&#7778;"); // s cedilla
	targ = targ.replace (/Ï/g, "&#xd1;"); // n tilde

	targ = targ.replace (/Ö/g, "&#7788;"); // t cedilla
	targ = targ.replace (/Ò/g, "&#7692;"); // d cedilla
	targ = targ.replace (/Ë/g, "&#7750;"); // n cedilla
	targ = targ.replace (/Ç/g, "&#346;"); // s accent

	targ = targ.replace (/À/g, "&#7744;"); // m dot over (anusvara)
	targ = targ.replace (/Ù/g, "&#7716;"); // h cedilla (visarga)
	targ = targ.replace (/ß/g, "&#7734;"); // l cedilla

    return targ;
}
