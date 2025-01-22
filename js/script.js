// selezionimao i elementi di output
const outputEmail = document.getElementById("email-random")

// creiamo una variabile con il numero di volte da eseguire le email random
const numRandom = 10

// setto l'endpoint
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

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