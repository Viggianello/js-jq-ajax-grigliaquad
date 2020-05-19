//metodo 1
 // $('.riga').each(function () {
//     $(this).append('<p>Non poteva essere altrimenti</p>')
// })
// metodo 2
$('.riga .testo-riga').append('<p>Non poteva essere altrimenti</p>')
var d = new Date();
var orario = d.getHours() + ':' + d.getMinutes();
$('.riga .orario-riga').append('<span class="orario"> ' + orario + '</span>')
// var ok = false;
// Intercetto il clicco sul microfono
// $('.icone-container-right').click(function() {
//     // leggo il valore destritto inserito nel input
//     var messaggio_utente = $('#input-messaggi').val();
//     // stampo in console
//     console.log(messaggio_utente);
//     var ilMioNuovoMessaggio = $('.template .nuovo-messaggio').clone().addClass('inviato');
//     ilMioNuovoMessaggio.text(messaggio_utente);
//     $('.lista-messaggi').append(ilMioNuovoMessaggio);
//     $('#input-messaggi').val('');
//     $(this).attr('placeholder', 'Scrivi un messaggio');
//     ok = true;
//     var testo_default = $('#input-messaggi').attr('placeholder', 'Scrivi un messaggio');
// });

// if (ok) {
    // rinposto il messaggio di testo_default
//     var testo_default = $('#input-messaggi').attr('placeholder', 'Scrivi un messaggio');
// }

// inposto un controllo per l'input
// var controllo_testo_default = true;
// Creo una funzione al click dell'input
// $('#input-messaggi').click(function() {
    // entra se è il un click dispari sul input
    // if (controllo_testo_default == true) {
        // tiro via il messaggio di default sull input
        // var testo_default = $(this).attr('placeholder', '');
        // inposto il controllo a false cosi poi posso ristabilire la condizione di partenza a un click pari
        // controllo_testo_default = false;
    // }
    // else {
        // il click sul punsante è pari dunque ristabilisco il messaggio di default
        // var testo_default = $(this).attr('placeholder', 'Scrivi un messaggio');
        // inposto il controllo a true cosi poi posso levare ancora il messaggio di default ad un click dispari
        // controllo_testo_default = true;
    // }
// });

// se uso il tasto invio quando sono sull input messaggi
$('#input-messaggi').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    // codice tasto invio
    if(keycode == '13'){
        // alert('You pressed a "enter" key in somewhere');
        // InviaRiceviMessagio() ;
        InviaRiceviMessaggioLibreria()
    }// chiudo l'if controllo input inserito da tastiera tasto 13 ossia invio
});// chiudo il keypress dell'input

$(document).on('click','.icone-container-right',  function() {
    // console.log('funziona');
    // InviaRiceviMessagio();
    InviaRiceviMessaggioLibreria();
}// chiusura funzione del click
);// chiusura click

// intercetto il focus nell'input del messaggio
$('#input-messaggi').focus(function() {
    // verifico che il focus funzioni
    console.log('il focus funziona');
    // tolgo la classe "fa-microphone" dall'icona di destra
    // aggiungo la classe "fa-paper-plane"
    $('.icone-container-right i').removeClass('fa-microphone').addClass('fa-paper-plane');
    // posso usare toggleClass per aggiungere e togliere le classi in modo compatto
    // $('.icone-container-right i').toggleClass('fa-microphone fa-paper-plane');
});

$('#input-messaggi').blur(function() {
    // tolgo la classe "fa-microphone" dall'icona di destra
    // aggiungo la classe "fa-paper-plane"
    // $('.right-footer-icon i').removeClass('fa-microphone').addClass('fa-paper-plane');
    // posso usare toggleClass per aggiungere e togliere le classi in modo compatto
    $('.icone-container-right i').removeClass('fa-paper-plane');
    $('.icone-container-right i').addClass('fa-microphone');
});

// controllo l'input a sx a ogni tasto digitato (tranne canc e back-space se usassi keypress)
$('.left .input-container').keyup(function(event){
    // var keycode = (event.keyCode ? event.keyCode : event.which);
    // codice tasto invio
    // if(keycode == '13'){
        // recupero il testo dell utente e tiro via gli spazi inutili e lo rendo tutto minuscolo per un confronto ,indipendentemente dal fatto che sia maiuscolo e minuscolo, delle sole lettere
        var testo_utente = $('.left .input-container input').val().trim().toLowerCase();
        // stampo ciò che leggo
        console.log('testo utente:' + testo_utente);
        // controllo che l'utente non ha digitato nulla(ha riempito l'input)
        if (testo_utente != '') {
            // all interno di liste-chat prendo ogni h1
            $('.liste-chat .riga').each(function() {
            // recupero il testo di questo h1 e lo rendo tutto minuscolo
            var testo_h1 = $(this).find('h1').text().trim().toLowerCase();
            // stampo il testo di ogni h1
            console.log('testo h1:' + testo_h1);
            // verifico se è uguale a quello inserito
            if (testo_h1.includes(testo_utente)) {
                // allora mostro solo lui(h1)
                $(this).show();
                // stampo il testo inserito dall'utente se  è contenuto id uno dei testi presenti negli h1
                console.log('la digitazione inserita è inclusa nel nome sopra:' + testo_utente);

            }
            else {
                // allora nascondo il resto delle .riga
                $(this).hide();
            }
            })// chiudo l'each
        }// chiudo l'if controllo input diverso da stringa vuota
        else {// allora l'input è vuoto e rimostro tutte le .riga
            $('.riga').show();
        }
    // }   // chiudo l'if del 13
});// chiudo il keyup

// intercetto il click sulle righe della chat di sx per associare la chat a dx
$('.riga').click(function() {
    // tolgo la classe active a qualsiasi lista messaggi
    $('.lista-messaggi').removeClass('active');
    // recupero il nome della chat dalla riga su cui ho cliccato ossia il testo del suo h1 relativo
    var nome_chat = $(this).find('h1').text();
    // stampo il testo nel h1 della riga cliccata
    console.log(nome_chat);
    // recupero anche l'immagine della chat su cui i cliccato e la copio cosi da poterla incollare senza taglaire
    immagine_profilo = $(this).find('img').clone();
    // recupero la chat,ossia lista messaggi, relativa a tale riga cliccata
    $('.lista-messaggi[data-chat-name="' + nome_chat + '"]').addClass('active');
    // recupero l'header-right relativa a tale riga cliccata
    // recupero l immagine in corso
    var immaginevecchia = $('.header-right').find('img');
    // sostituisco il titolo vecchio con quello della immagine relativa
    var titolovecchio = $('.header-right').find('h3').text(nome_chat);
    // cancello tale immagine
    immaginevecchia.remove();
    // inserisco quella nuova in base alla riga cliccata
    $('.header-right').prepend(immagine_profilo);
});


// se clicco sull messaggio che ho inviato o su quello generato dal pc mi apre il suo dropdown
$('.chat').on('click','.messaggio',function() {
    // alert('ciao');// non funziona l alert
    // inizializzo il nuovo messaggio in una variabile che mi servirà per cancellarlo
    var nuovomessaggio = $(this);
    // do la classe active al dropdown ,in modo da vederlo, o levo la tale classe se l ha gia in modo da nasconderlo
    $(this).find('.message-options-panel').toggleClass('active');
    // se clicco su messagge-destroy cancello il messaggio_utente
    $(this).find('.message-destroy').click(function() {
        // nascondo il messaggio sul display anche se cosi rimarrebbe nel html
        // $(nuovomessaggio).hide();
        // rimuove il messaggio
        $(nuovomessaggio).remove();
    });//chiusura click per cancellare il messaggio
});//chiusura click per aprire il dropdown

// se esco col mouse dal dropdown, dopo esserci entrato, mi chiude il suddetto
$('.chat').on('mouseleave','.message-options-panel',function() {
  $( this ).removeClass('active');
});

// function InviaRiceviMessagio() {
//     // leggo il valore destritto inserito nel input
//     var messaggio_utente = $('#input-messaggi').val();
//     // stampo in console
//     // console.log(messaggio_utente);
//     // verifico che il mesaggio non sia vuoto
//     if (messaggio_utente != ('')) {
//         var ilMioNuovoMessaggio = $('.template .messaggio').clone().addClass('inviato');
//         ilMioNuovoMessaggio.find('li').text(messaggio_utente);
//         // metto il selettore con l active se no mi mette il messaggio su tutte le chat anche quelle a cui non starei mandando un messaggio
//         $('.lista-messaggi.active').append(ilMioNuovoMessaggio);
//         // resetto l'input
//         $('#input-messaggi').val('');
//         // rimetto il messaggio di default
//         $(this).attr('placeholder', 'Scrivi un messaggio');
//         // var pcmessaggio = $('.lista-messaggi').append('<li class="messaggio-ricevuto">' + 'ok' + '</li>');
//         setTimeout(function(){
//             // metto un messaggio di risposta ok ad ogni messaggio dell'utente che apparirà dopo un secondo
//             // copio il template e gli aggiungo la classe ricevuto per farlo bianco e a sx
//             var pcmessaggio = $('.template .messaggio').clone().addClass('ricevuto');
//             // cambio il suo testo
//             pcmessaggio.find('li.nuovo-messaggio').replaceWith('<li class="nuovo-messaggio">' + 'ok' + '</li>');
//             // lo metto in pagina
//             $('.lista-messaggi.active').append(pcmessaggio)
//         }, 1000);
//     }// chiudo l'if controllo input diverso da stringa vuota
// }// chiudo la funzione

// inserisco tramite la libreria handlebars i messaggi inviati dall utente
var libreriamessaggio = $('#entry-template').html();
var template_function = Handlebars.compile(libreriamessaggio);

function InviaRiceviMessaggioLibreria() {
    // leggo il valore destritto inserito nel input
    var messaggio_utente = $('#input-messaggi').val();
    // stampo in console
    // console.log(messaggio_utente);
    // verifico che il mesaggio non sia vuoto
    if (messaggio_utente != ('')) {
        var ilMioNuovoMessaggio = {
            // cambio il suo testo
            nuovomessaggio: messaggio_utente,
            // aggiungo la classe
            classe: 'inviato'
        };
        var html_finale = template_function(ilMioNuovoMessaggio);
        // metto il selettore con l active se no mi mette il messaggio su tutte le chat anche quelle a cui non starei mandando un messaggio
        $('.lista-messaggi.active').append(html_finale);
        console.log(html_finale);
        // resetto l'input
        $('#input-messaggi').val('');
        // rimetto il messaggio di default
        $(this).attr('placeholder', 'Scrivi un messaggio');
        // var pcmessaggio = $('.lista-messaggi').append('<li class="messaggio-ricevuto">' + 'ok' + '</li>');
        setTimeout(function(){
            // metto un messaggio di risposta ok ad ogni messaggio dell'utente che apparirà dopo un secondo
            // copio il template e gli aggiungo la classe ricevuto per farlo bianco e a sx
            var pcmessaggio = {
                // cambio il suo testo
                nuovomessaggio: 'ok',
                // aggiungo la classe
                classe: 'ricevuto'
            };
            var html_finale2 = template_function(pcmessaggio);
            // lo metto in pagina
            $('.lista-messaggi.active').append(html_finale2);
            console.log(html_finale);
        }, 1000);
    }// chiudo l'if controllo input diverso da stringa vuota
}// chiudo la funzione

// Create in HTML una griglia di 36 quadratini (6x6).
// Ad ogni click su un quadratino, parte una richiesta ajax per recuperare un numero random tra 1 e 9.
// Se il numero restituito dall'api è <= 5, il quadrato su cui l'utente ha cliccato diventa giallo; se invece il numero restituito dall'api è > 5, il quadrato su cui l'utente ha cliccato diventa verde.
// In entrambi i casi, andiamo ad inserire nel quadrato il numero restituito dall'api.
// BONUS: generare la griglia in jQuery utilizzando handlebars :wink:
