let jumlahKartu = 5;
let kartuPertama = kartuKedua = 0;

function buatAngka() {
    let angkaBerurut = [];

    for (var i = 1; i <= jumlahKartu; i++) {
        angkaBerurut.push(i, i);
    }

    return angkaBerurut;
}

function acakAngka(angkaBerurut) {
    let angkaAcak = angkaBerurut.sort(function() {
        return 0.5 - Math.random();
    });
    return angkaAcak;
}

function persiapkanKartu(angkaAcak) {
    let str = '';
    angkaAcak.forEach(function(i) {
        str += '<div class="kartu" nilai="'+ i +'">' +
        '<div class="belakang">'+ i +'</div>' +
        '<div class="depan"><img src="./image/logo.png" alt="""></div>' +
    '</div>';
    });

    $('#game').append(str);
}

function aturan() {
    $('.kartu').on('click', function() {
        $(this).addClass('buka');

        if(kartuPertama == 0) {
            kartuPertama = $(this).attr('nilai');
            // console.log(kartuPertama);
        } else {
            kartuKedua = $(this).attr('nilai');

            if(kartuPertama == kartuKedua) {
                $('.buka').addClass('benar');
                $('.benar').removeClass('buka');
                kartuPertama = kartuKedua = 0;
            } else {
                kartuPertama = kartuKedua = 0;
                $(this).one('transitionend', function() {
                    $('.kartu').removeClass('buka')
                });
            }
        }
    });
}

$(document).ready(function() {
    let angkaBerurut = buatAngka();

    let angkaAcak = acakAngka(angkaBerurut);

    persiapkanKartu(angkaAcak);

    aturan();

    // console.log('Ini adalah angka berurut :' + angkaBerurut);
    // console.log('Ini adalah angka acak :' + angkaAcak);
});