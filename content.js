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
		ca:{titulo:"SPIRULINA (CIANOBACTERIS)", descripcion:`Et sents cansat i sense energia? Espirulina! Tens problemes de salut? ESPIRULINA!
													   L’any 1967, l’Associació Internacional de Microbiologia Aplicada va fer un anunci que revolucionaria la indústria alimentària: havia arribat l’espirulina. Així es va anomenar un suplement nutricional obtingut a partir de diverses microalgues, o cianobacteris, del gènere Spirulina (actualment, Arthrospira). La cultura popular ha fet d’aquest producte una panacea, atorgant-li propietats curatives sense prou evidència científica. Malgrat tot, la seva composició fa que sigui un complement excel·lent. ¿Sabies que aquestes microalgues ja eren consumides pels asteques i altres pobles mesoamericans fa més de 500 anys?
													   Però els cianobacteris (fílum Cyanobacteriota) no destaquen només com a font de nutrients. La seva aparició, fa uns 2.500–3.500 milions d’anys, va permetre l’oxigenació de l’atmosfera i els oceans, un fenomen clau per a la diversificació de la vida. Actualment, són uns dels principals productors primaris del medi aquàtic i juguen un paper important en els cicles biogeoquímics.`},
		en:{titulo:"Nombre del ser vivo", descripcion:"Descripcion del ser vivo(en)"}
	},
	{
		//? Ficha 2
		es:{titulo:"Nombre del ser vivo", descripcion:"Descripcion del ser vivo"},
		ca:{titulo:"ESCHERICHIA COLI (BACTERIS)", descripcion:`“Al pot petit hi ha la bona confitura”. I, sinó, que li diguin a Escherichia coli.
																Descobert l’any 1885 per Theodor Escherich (qui li va donar el nom), aquest bacteri de l’ordre Enterobacterales, originat fa aproximadament 30–40 milions d’anys i habitant del nostre tracte digestiu, ha resultat ser una caixa de sorpreses, especialment pels camps de la microbiologia, la biotecnologia i la biomedicina. La seva enorme plasticitat genètica i metabòlica, sumat a una enorme facilitat per ser cultivat al laboratori, el converteix en un model excel·lent per diferents camps de recerca teòrics i aplicats. De fet, una de les primeres aplicacions pràctiques de la tecnologia de recombinació d’ADN va ser manipular soques d’E. coli per obtenir insulina humana pel tractament de la diabetes.  
																Però no és or tot el que lluu: tot i que la majoria de soques d’Escherichia coli són innòcues, n’hi ha que poden provocar greus infeccions a través, per exemple, de la contaminació d’aigua de boca i d’aliments... amb restes fecals.`},
		es:{titulo:"Nombre del ser vivo", descripcion:"Descripcion del ser vivo"}
	},
	{
		//? Ficha 3
		es:{titulo:"Nombre del ser vivo", descripcion:"Descripcion del ser vivo"},
		ca:{titulo:"BACILLUS SUBTILIS (BACTERIS)", descripcion:`El món viscut des del prisma d’un ésser diminut pot ser un lloc molt hostil. Per això, cal tenir sempre un as sota la màniga.
																Els bacteris del gènere Bacillus (ordre Bacillales) són capaços d’adoptar una forma de resistència inactiva i no reproductiva, anomenada endòspora, que els permet sobreviure en condicions ambientals extremes de temperatura, sequera i radiació durant molts anys (fins i tot dècades!). 
																Dins les espècies d’aquest gènere, però, n’hi ha una que destaca per sobre de totes: Bacillus subtilis. De la mateixa manera que el bacteri Escherichia coli, el qual s’utilitza en infinitat d’experiments, B. subtilis també presenta un munt de propietats que fan que sigui un organisme model excel·lent: per exemple, és capaç de produir enzims d’ús industrial, agrícola i biomèdic en quantitats molt superiors a altres bacteris, fet que l’ha convertit en un dels reis indiscutibles de la recerca biotecnològica.`},
		es:{titulo:"Nombre del ser vivo", descripcion:"Descripcion del ser vivo"}
	},
	{
		//? Ficha 4
		es:{titulo:"Nombre del ser vivo", descripcion:"Descripcion del ser vivo"},
		ca:{titulo:"nombre del ser vivo", descripcion:"Descripcion del ser vivo"},
		es:{titulo:"Nombre del ser vivo", descripcion:"Descripcion del ser vivo"}
	},
	{
		//? Ficha 5
		es:{titulo:"Nombre del ser vivo", descripcion:"Descripcion del ser vivo"},
		ca:{titulo:"nombre del ser vivo", descripcion:"Descripcion del ser vivo"},
		es:{titulo:"Nombre del ser vivo", descripcion:"Descripcion del ser vivo"}
	},
];

function getFicha(markerIndex,lang){
	if(!FICHAS[markerIndex]) return{ titulo: `[Ficha ${markerIndex}]`, descripcion:""}; //! Por si falla el marker de fichas
	return FICHAS[markerIndex][lang] || FICHAS[markerIndex][`ca`];

}

