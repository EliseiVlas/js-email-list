// selezionimao i elementi di output
const outputEmail = document.getElementById("email-random")
const generaAltreEmail = document.getElementById("genera-mail")


// creiamo una variabile con il numero di volte da eseguire le email random
const numRandom = 10

// setto l'endpoint
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

// creo una funzione per generare le mail
function generaEmail() {
// creiamo un for per stampare piu email sulla pagina
    let listaEmail = "";
    for(let i = 0; i < numRandom; i++){
        
        // faccio partire la richiesta Ajax verso l'API per ricevere l'email
        axios.get(endpoint)
            .then(responseObj => {
                //codice da eseguire in caso di successo
                const email = responseObj.data.response;

                // per ogni mail generata la aggiongo in una lista
                listaEmail+= `
                <li>${email}</li>
                `
                // output in pagina
                outputEmail.innerHTML = listaEmail
            })
            .catch(error => {
                // codice da eseguire in caso di errore
                console.error(error)
            })
    }
}

// Aggiungi un event listener al bottone per generare nuove email al click
generaAltreEmail.addEventListener("click", generaEmail);

// richiamo la funzione per generare le mail
generaEmail();