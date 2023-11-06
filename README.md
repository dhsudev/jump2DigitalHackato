
# Hackató Jump2Digital
by Lua Trevín

## Dependències
Al ser una aplicació de React necessitareu **node.js** per executar-la. Podeu descarregar-lo a la [pàgina oficial](https://nodejs.org/en).
També necessitareu un **navegador i una interfície de comandes**.
## Execució de l'aplicació
Primer descarrega't o clona aquest repositori.

 - **Descarrega:** En aquesta mateixa pàgina a la part superior dreta trobaràs un botó anomenat "code". En clicar-lo apareixerà un desplegable amb una opció de descarregar un zip.
 - Un cop descarregat simplement descomprimeix el zip.
 -  **GitHub Desktop:** En cas de tenir GitHub Desktop al desplegable d'abans selecciona l'opció "obre amb GitHub Desktop" i segueix les passes a pantalla.
 
 - **Clonar repositori (Linux o Mac):** obre un terminal i executa la següent comanda:
	 `git clone https://github.com/dhsudev/jump2digital_hackato.git`

Un cop descarregada o clonada obre una interfície de comandes i navega fins la ruta a ón tens ubicada la carpeta:

    cd /ruta_fins_la_carpeta

Al estar en la carpeta, instal·la les dependències del projecte amb:

    npm install

Executa l'aplicació en mode de desenvolupament.

    npm start

Obriu [http://localhost:3000](http://localhost:3000) per veure'l al vostre navegador si no s'ha obert per defecte.


## Funcionalitats
### Informació de personatges
Cada personatge compta amb una targeta a on podem veure:
 - Una imatge seva (en cas de tenir)
 - Planeta d'origen
 - Última localització
 - Espécie
 - Dues etiquetes amb:
	 - Estat (Viu, Mort, Desconegut)
	 - Gènere (Home, Dona, Desconegut)
  - 
![Screenshot 2023-11-06 at 01 03 50](https://github.com/dhsudev/jump2digital_hackato/assets/74731906/74372ecb-6c7b-4cc6-8c40-d1a873f0ddcf)

### Cerca de personatges
He implementat una cerca de personatges en temps real. Està composta d'un input i un botó
![Screenshot 2023-11-06 at 01 03 43](https://github.com/dhsudev/jump2digital_hackato/assets/74731906/f91761f3-d7f5-4930-9304-f598e25b87c4)

### Paginació
He afegit dos botons al peu de la pàgina per veure més personatges
![Screenshot 2023-11-06 at 01 03 58](https://github.com/dhsudev/jump2digital_hackato/assets/74731906/6a310612-3dc9-4e82-81f4-fc94703fd612)

## Tecnologies utilitzades
**React -** Biblioteca de JavaScript. La seva metodologia se centra en la creació de components reutilitzables que gestionen el seu contingut i estat. En aquest projecte comptem amb el buscador, les targetes de personatges i els botons de paginació.
**Bootstrap -** Framework que facilita el disseny d'UI. 
(No he acabat d'implementar-ho correctament per a que la pàgina sigui responsiva del tot.)
**Sass *(Syntactically Awesome Stylesheets)* -** Preprocessador de CSS que facilita el manteniment de fulles d'estil, ja que introdueix característiques adicionals com per exemple les variables.
**React-paginate -** La idea inicial era utilitzar aquesta biblioteca per fer una paginació més professional, però per falta de temps no he pogut implementar-la.
**React-scripts -** Conjunt de scripts que eviten haver de  configurar manualment tota l'estructura del projecte.
## Conclusions
Degut a motius personals no he tingut temps a implementar funcionalitats com la **càrrega infinita i filtre d'etiquetes** tot i que sí que havia fet recerca de com fer-ho. 
Aquest ha sigut el meu primer projecte amb React i soc conscient que hi ha moltíssimes coses a millorar.
Aquesta primera fase de la hackató m'ha servit com a motivació per començar amb React  (cosa que portava posposant temps) i seguir aprenent i millorant!

Aquest mateix projecte de forma personal l'arreglaré amb temps i el millora-re :)

Gràcies per llegir espero que t'hagi agradat!



