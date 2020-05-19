// var d = new Date();
// var orario = d.getHours() + ':' + d.getMinutes();


// Create in HTML una griglia di 36 quadratini (6x6).
// Ad ogni click su un quadratino, parte una richiesta ajax per recuperare un numero random tra 1 e 9.
// Se il numero restituito dall'api è <= 5, il quadrato su cui l'utente ha cliccato diventa giallo; se invece il numero restituito dall'api è > 5, il quadrato su cui l'utente ha cliccato diventa verde.
// In entrambi i casi, andiamo ad inserire nel quadrato il numero restituito dall'api.
// BONUS: generare la griglia in jQuery utilizzando handlebars :wink:
// Creo 36 quadratini che mi faranno la griglia 6x6
// for (var i = 0; i < 36; i++) {
//     $('.griglia').append('<div class="quadratino"></div>')
// }

// inserisco tramite la libreria handlebars i quadratini
var quadratinigriglia = $('#entry-template').html();
var template_function = Handlebars.compile(quadratinigriglia);
for (var i = 0; i < 36; i++) {
    var html_finale = template_function();
    $('.griglia').append(html_finale);
}

// Associo ad ogni click del quadratino
$(document).on('click','.quadratino',  function() {
    // recupero il quadrato corrente
    var quadratocorrente = $(this);
    // richiamo ajax per recuperare un numero random tra 1 e 9
    // questo è una funzione
    $.ajax({
        // qui parte l'oggetto
        'url': 'https://flynn.boolean.careers/exercises/api/random/int',
        // risponde con un numero random da 1 a 9
        'method': 'GET',
        'success': function(numero) {
            // console.log(numero);
            var numerorandom = numero.response;
            numcolor(numerorandom, quadratocorrente)
        }
    }// fine oggetto
    );
}// chiusura funzione del click
);// chiusura click

// creo una funzione per associare il numero random hai colori
function numcolor(numero, quad) {
    // Se il numero (restituito dall'api) è <= 5,
    if (numero<= 5) {
        // il quadrato su cui l'utente ha cliccato diventa giallo
        quad.addClass('giallo');
    }
    // allora il numero (restituito dall'api) è > 5
    else {
        quad.addClass('verde');
        // var oky =$('.quadratino'){
        //     classe:verde
        // }
    }
    quad.append(numero);
}
