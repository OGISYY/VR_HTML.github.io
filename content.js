//----------------------------------------
// Docuemento de contenido, traduccion
//----------------------------------------


const TEXT = {
	es: {
		continuar :" Continuar",
		titulo : "Texto de ayuda",
		descripcion: "Dar consentimiento a la camara para poder seguir con el interactivo",
	},
	ca:{
		continuar :"Continuar",
		titulo : "Text d'ajuda",
		descripcion: "Aprova el consentiment a la camera per a poder seguir amb l'interactiu"
	},
	en:{
		continuar :"Continue",
		titulo : "Help text",
		descripcion: "Give consent to the camera to continue with the interactive"
	}
}

function getText(lang, id){
	if (!TEXT[lang]) lang = "ca"; //! Idioma predeterminado si el idioma no existe
		return TEXT[lang][id] || `[${id}]`;
}

const FICHAS = [
	//? Escalable a todos los contenidos deseados
	{
		//? Ficha 1
		es:{titulo:"Nombre del ser vivo", descripcion:"Descripcion del ser vivo(es)"},
		ca:{titulo:"Nombre del ser vivo", descripcion:`Et sents cansat i sense energia? Espirulina! Tens problemes de salut? ESPIRULINA!
													   L’any 1967, l’Associació Internacional de Microbiologia Aplicada va fer un anunci que revolucionaria la indústria alimentària: havia arribat l’espirulina. Així es va anomenar un suplement nutricional obtingut a partir de diverses microalgues, o cianobacteris, del gènere Spirulina (actualment, Arthrospira). La cultura popular ha fet d’aquest producte una panacea, atorgant-li propietats curatives sense prou evidència científica. Malgrat tot, la seva composició fa que sigui un complement excel·lent. ¿Sabies que aquestes microalgues ja eren consumides pels asteques i altres pobles mesoamericans fa més de 500 anys?
													   Però els cianobacteris (fílum Cyanobacteriota) no destaquen només com a font de nutrients. La seva aparició, fa uns 2.500–3.500 milions d’anys, va permetre l’oxigenació de l’atmosfera i els oceans, un fenomen clau per a la diversificació de la vida. Actualment, són uns dels principals productors primaris del medi aquàtic i juguen un paper important en els cicles biogeoquímics.
`},
		en:{titulo:"Nombre del ser vivo", descripcion:"Descripcion del ser vivo(en)"}
	}
];

function getFicha(markerIndex,lang){
	if(!FICHAS[markerIndex]) return{ titulo: `[Ficha ${markerIndex}]`, descripcion:""}; //! Por si falla el marker de fichas
	return FICHAS[markerIndex][lang] || FICHAS[markerIndex][`ca`];

}

