$(document).ready(function () {

    $('.radio1').click(function () {
        $('.image1').css('margin-left', '0');
        $('label').css('backgroundColor', 'rgb(165, 165, 165)');
        $('.radio1').css('backgroundColor', 'blue');
    });

    $('.radio2').click(function () {
        $('.image1').css('margin-left', '-300px');
        $('label').css('backgroundColor', 'rgb(165, 165, 165)');
        $('.radio2').css('backgroundColor', 'blue');
    });

    $('.radio3').click(function () {
        $('.image1').css('margin-left', '-600px');
        $('label').css('backgroundColor', 'rgb(165, 165, 165)');
        $('.radio3').css('backgroundColor', 'blue');
    });

    function remonter() {
        $('.container').show();
        setTimeout(() => {
            $('.container').css({
                transition: '2.5s',
                transform: 'translateY(-610px)',
                opacity: '1'
            });
            $('.page_prof').css({
                opacity: '0.1',
                transition: '2.5s'
            });
        }, 10);
    }

    var titre_plat1 = "Thiéboudieune";
    var titre_plat2 = "Mbaxalou Saloume";
    var titre_plat3 = "Yassa Guinar";

    var description_plat1 = "Le Thiéboudiene ou bien riz ou poisson estUn plat très connu au Sénégal de par sa … ";
    var description_plat2 = "Mbaxalou Saloum est un plat à découvrir si vous ne l’avez jamais gouter. C’est un plat très rich qui est…";
    var description_plat3 = "Le Yassa Guinar ou Riz au poulet est un plat trèsriche. Il est réalisé de base par l’oignon, le riz, et la …";

    var nombre_de_plats = 1;
    var prix_unitaire = 1000;



    $('.plus').click(function () {
        nombre_de_plats++;
        $('.nombre_de_plats').val(nombre_de_plats);
        $('.somme').text(prix_unitaire * nombre_de_plats);
        $('.produis_prix').text(nombre_de_plats + "x" + prix_unitaire);
    });

    $('.moins').click(function () {
        if (nombre_de_plats > 1) {
            nombre_de_plats--;
            $('.nombre_de_plats').val(nombre_de_plats);
            $('.somme').text(prix_unitaire * nombre_de_plats);
            $('.produis_prix').text(nombre_de_plats + "x" + prix_unitaire);
        }
    });

    $('.riz_au_poisson').click(function () {
        $('nav').css('margin-left', '-550px');
        remonter();
        (plat(1000, 'riz_au_poisson.jpeg', 'riz_au_poisson_4.jpg', 'riz_au_poisson_3.jpeg', titre_plat1, description_plat1));
    });

    $('.mbaxal_saloume').click(function () {
        $('nav').css('margin-left', '-550px');
        remonter();
        (plat(1000, 'mbaxal_saloume.jpg', 'mbaxal_saloume2.jpg', 'mbaxal_saloume3.jpg', titre_plat2, description_plat2));
    });

    $('.coucous_poulet').click(function () {
        $('nav').css('margin-left', '-550px');
        remonter();
        (plat(2000, 'coucous_poulet.jpg', 'coucous_poulet2.jpg', 'coucous_poulet3.jpg', titre_plat3, description_plat3));
    });

    $('.valider').click(function () {
        nombre_de_plats = 1
        $('nav').css('margin-left', '0');
        $('.container').css({
            opacity: '0'
        });
        $('.page_prof').css({
            opacity: '1',
            transition: '2s'
        });
        setTimeout(() => {
            $('.container').css({
                display: 'none',
                transform: 'translateY(0)'
            });
        }, 2000);
    });



    function plat(prix, plat1, plat2, plat3, titre_pla, carte_desc) {
        prix_unitaire = prix;
        $('.image01').attr('src', 'images/' + plat1);
        $('.image2').attr('src', 'images/' + plat2);
        $('.image3').attr('src', 'images/' + plat3);
        $('.titre_pla').text(titre_pla);
        $('.carte_desc p').text(carte_desc);
        $('.unitaire_prix').text(prix + ' fcfa');
        $('.somme').text(prix);
        $('.produis_prix').text('1x' + prix);
        $('.nombre_de_plats').val(1);
        $('.image4').attr('src', 'images/mafeee.jpeg');
        $('.titre_image4').text('Mafé yapp');
        $('.prix_image4').text('1500 fcfa');
        $('.image5').attr('src', 'images/poulet-mafé.jpeg');
        $('.titre_image5').text('Mafé guinar');
        $('.prix_image5').text('1500 fcfa');
        $('.image6').attr('src', 'images/thiéré.jpeg');
        $('.titre_image6').text('Thiéré');
        $('.prix_image6').text('3500 fcfa');
        $('.image7').attr('src', 'images/mafé.jpeg');
        $('.titre_image7').text('Mafé yapp');
        $('.prix_image7').text('1500 fcfa');
    }


});