/* Pour info, les span �taient une tentative de mise en forme via CSS mais j'ai trouv� plus pratique, et je les ai laiss�s au cas o�... */
 
 var txt_vesicule = 	"<h2>V�sicule<br/>Transporteurs</h2>"+
						"<h4>Structure:</h4><span><p>Bicouche phospholipidique</p></span>"+
						"<h4>R�le:</h4><span><p>Transport de prot�ines ou d'autres �l�ments � l'int�rieur de la cellule, vers l'ext�rieur (exocytose) ou vers l'int�rieur (endocytose).</p></span>"+
						'<h4>Fonctionnement:</h4><span><p>Transporteur "remorqu�" par des prot�ines prenant appui sur le cytosquelette.</p></span>'
						
 var txt_lysosome = "<h2>Lysosome<br/>Estomacs cellulaires</h2>"+
					"<h4>Structure:</h4><span><p>Bicouche phospholipidique</p></span>"+
					"<h4>R�le:</h4><span><p>Digestion intra-cellulaire � l'aide d'enzymes</p></span>"+
					"<h4>Fonctionnement:</h4><span><p>Absorption de nutriments par endocytose ou d'�l�ments cellulaires abim�s, digestion de ceux-ci, puis distribution des r�sultats de la r�action chimique dans la cellule et enfin expulsion des d�chets par exocytose.</p></span>"
 
 var txt_mitoch = 	"<h2>Mitochondrie<br/>Piles</h2>"+
					"<h4>Structure:</h4><span><p>Deux bichouches phospholipidiques appel�es membranes mitochondriales, une externe et une interne. La mitochondrie contient des ribosomes, de l'ATP de l'ADN et bien d'autres mol�cules.</p></span>"+
					"<h4>R�le:</h4><span><p>Centrale �nerg�tique de la cellule.</p></span>"+
					"<h4>Fonctionnement:</h4><span><p>L'�nergie - sous forme d'ATP (ad�nosine triphosphate) - est issue de diff�rentes �tapes de r�actions chimique partant d'une mol�cule de glucose.</p></span>"
 
 var txt_golgi =	"<h2>Appareil de Golgi<br/>Usines miniatures</h2>"+
					"<h4>Structure:</h4><span><p>Form� d'un empilement de saccules membranaires applatis.</p></span>"+
					"<h4>R�le:</h4><span><p>Modification de certaines prot�ines au cours d'un cheminement au travers de ses saccules.</p></span>"+
					"<h4>Fonctionnement:</h4><span><p>Suite de r�actions chimiques, notamment par glycosilation.</p></span>"
 
 var txt_rer =	"<h2>R�ticulum endoplasmique rugueux - Tunnel</h2>"+
				"<h4>Structure:</h4><span><p>Compos� d'une bicouche phospholipidique piquet�e de ribosomes (d'un aspect <i>rugueux</i>) d�limitant la lumi�re, un espace interne pouvant �tre compar� � un tunnel.</p></span>"+
				"<h4>R�le:</h4><span><p>Plus sp�cialis� que le REL, il participe au transport et � la finalisation des prot�ines, qui sont synth�tis�es par les ribosomes.</p></span>"+
				'<h4>Fonctionnement:</h4><span><p>Les prot�ines "tombent" dans la lumi�re du RER o� elles sont modifi�es et d�plac�es. Elles quittent le RER dans une v�sucule issue de la membrane de ce dernier.</p></span>'
 
 var txt_noy = 	"<h2>Noyau - Le coffre-fort</h2>"+
				"<h4>Structure:</h4><span><p>Entour� par une double membrane appel�e enveloppe nucl�aire en lien par endroits avec le RER. Ces deux membranes fusionnent � intervalles r�guliers pour former les pores nucl�aires. � l'int�rieur se trouvent le nucl�ole et l'ADN, sous forme de chromatine ou de chomosomes.</p></span>"+
				"<h4>R�le:</h4><span><p>Stockage de la totalit� des informations g�n�tiques n�cessaires � la vie de la cellule.</p></span>"+
				"<h4>Fonctionnement:</h4><span><p>Site de la transcription (copie de l'information g�n�tique sur des ARNm).</p></span>"
 
 var txt_rel = 	"<h2>R�ticulum endoplasmique lisse - REL</h2>"+
				"<h4>Structure:</h4><span><p>Similaires � celle du RER, � la diff�rence que sa membranne n'est pas parsem�e de ribosomes, d'o� son aspect <i>lisse</i>.</p></span>"+
				"<h4>R�le:</h4><span><p>Sinth�se des phospholipides,stockage du calcium, transformation de certaines mol�cules ext�rieures (m�dicament, alcool, ...). Dans certaines cellules, le REL remplit aussi des fonctions suppl�mentaires, telles la production d'hormones, d'acides gastriques, etc.</p></span>"+
				"<h4>Fonctionnement:</h4><span><p>Il est le si�ge de beaucoup de r�actions chimiques complexes (ex: d�toxification, diff�rentes synth�ses).</p></span>"
 
 var txt_adn =	"<h2>ADN - Le livre de la vie</h2>"+
				"<h4>Structure:</h4><span><p>�chelle � la c�l�bre forme de double h�lice compos�e de deux colonnes sucre-phosphate-sucre-phosphate-... et dont les �chelons sont apell�s bases azot�es.</p></span>"+
				"<h4>R�le:</h4><span><p>L'ADN contient toutes les informations n�cessaires � la vie.</p></span>"+
				"<h4>Fonctionnement:</h4><span><p>Toutes les informations sont �crites � l'aide des quatre lettres A, T, G, et C. Gr�ce � ces combinaisons, il est possible d'�crire tout ce qui est utile � la cellule.</p></span>"

 var txt_centr=	"<h2>Centrioles - Remorqueurs de choromosomes</h2>"+
				"<h4>Structure:</h4><span><p>Neuf triplets de microtubules entour�s par un certain nombre de prot�ines.</p></span>"+
				"<h4>R�le:</h4><span><p>S�parer les diff�rents chromosomes durant la division cellulaire.</p></span>"+
				"<h4>Fonctionnement:</h4><span><p>Les centrioles, une fois plac�s aux deux p�les de la cellule, d�ploient des microtubules vers les centrom�res des chromosomes et les tirent vers eux pour les s�parer.</p></span>"
				
 var txt_rib =	"<h2>Ribosome - D�codeurs</h2>"+
				"<h4>Structure:</h4><span><p>Form� par deux sous-unit�s compos�es d'ARN ribosomique et de prot�ines.</p></span>"+
				"<h4>R�le:</h4><span><p>Le ribosome synth�tise les prot�ines.</p></span>"+
				"<h4>Fonctionnement:</h4><span><p>Un brin d'ARNm (messager) passe dans le ribosome et un ARNt (de transfert) entre dans la grande sous-unit� si son codon (groupe de trois bases azot�es) correspond � celui qui est en face sur l'ARNm. Cet ARNt porte avec lui un acide amin� sp�cifique qui est ajout� � la chaine d�ja assembl�e.</p></span>"

 var txt_arn =	"<h2>ARN - Multifonction</h2>"+
				"<h4>Structure:</h4><span><p>Tr�s similaire � l'ADN � la diff�rence qu'il ne poss�de qu'un brin et que la thymine (T) de l'ADN est remplac�e par l'uracile (U). De plus, il est chimiquement plus instable que l'ADN, c'est pourquoi il n'est pas utilis� pour le stockage d'informations � long terme.</p></span>"+
				"<h4>R�le:</h4><span><p>Multiples, il existe des ARN de transport, messagers, r�gulateus, guides, satellites, ...</p></span>"+
				"<h4>Fonctionnement:</h4><span><p>La copie d'informations g�n�tiques se fait gr�ce � l'ouverture de la double-h�lice d'ADN, puis la copie des codons sur l'ARN. Celui-ci peut alors sortir du noyau, ce que l'ADN ne peut pas faire.</p></span>"

 var txt_nucl =	"<h2>Nucl�ole - Fabrique d'ARN</h2>"+
				"<h4>Structure:</h4><span><p>Compos� d'aucune membranne, c'est un agglom�rat de prot�ines et d'ARN.</p></span>"+
				"<h4>R�le:</h4><span><p>Lieu de la transcription d'ARN, nottament d'ARNr (ribosomiques) qui, associ�s avec des prot�ines, vont former les deux sous-unit�s des ribosomes.</p></span>"+
				"<h4>Fonctionnement:</h4><span><p>Cr�ation d'un ribosome: Transcription des ARNr ainsi que des prot�ines n�cessaires (cette �tape est effectu�e dans le cytoplasme par d'autres ribosomes) qui rentrent dans le noyau, association des mol�cules fra�chement form�es en un nouveau ribosome, qui sort du noyau pour jouer son r�le.</p></span>"

	