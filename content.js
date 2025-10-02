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
		ca:{titulo:"Nombre del ser vivo", descripcion:"Descripcion del ser vivo(ca)"},
		en:{titulo:"Nombre del ser vivo", descripcion:"Descripcion del ser vivo(en)"}
	}
];

function getFicha(markerIndex,lang){
	if(!FICHAS[markerIndex]) return{ titulo: `[Ficha ${markerIndex}]`, descripcion:""}; //! Por si falla el marker de fichas
	return FICHAS[markerIndex][lang] || FICHAS[markerIndex][`ca`];

}

