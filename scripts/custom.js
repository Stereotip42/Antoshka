/**
 * Created by maksim.kutsayev on 09-Dec-17.
 */

$(window).load(function () {
    $('body, html').scrollTop(0);
    $("#loader").fadeToggle({display: "none"}, "slow");
});


$(document).ready(function () {

    var bigbox = humane.create({baseCls: 'humane-bigbox', timeout: 3000});

    setTimeout(function () {
        pageScroll();
    }, 6000);

    setTimeout(function () {
        start();
    }, 6000);


    function pageScroll() {
        window.scrollBy(0, 2.5);
        setTimeout(pageScroll, 100);
    }

    function start() {
        // Maksimka part. (Ia ne predlagaiu sosat', ia liublu tebia)
        bigbox.timeout = 3000;
        bigbox.log('<small>МАКСИМКА:</small> Антошка поросеночек, привет. Это я, твой друг, Максимка)');
        bigbox.log('<small>МАКСИМКА:</small> Надо поздравить тебя с днем рождения, правда не очень хочется)');


        // bigbox.log('<small>МАКСИМКА:</small> Антошка Косорбуцкин хорошеньктй, пожалуйста, не надо жиробасится... Сережа показывал мне твоё новое пузико, и это было больно, если честно');

        bigbox.timeout = 3000;
        bigbox.log('<small>МАКСИМКА:</small> Поэтому мальчик, следи за своим животиком волосатеньким, люби детишек, играй в жопуна,' +
            ' кушай груши, не пукай дальше');

        bigbox.timeout = 4000;
        bigbox.log('<small>МАКСИМКА:</small> А еще Нагорного встретил в городе каком-то, он тебе передавал, что Батин тобой не доволен, типо не ходишь, ну короче такое, исправляйся');

        bigbox.timeout = 4000;
        bigbox.log('<small>МАКСИМКА:</small> А еще не умирай пожалуйста никогда, потому что люди буду плакать, ты же не хочешь этого)');

        bigbox.log('<small>МАКСИМКА:</small> <a href="www.e-tehno.by/Пылесосы" target="_blank">www.e-tehno.by/Пылесосы</a> (Прости, но реклама уже проплачена)');
        bigbox.log('<small>ВНИМАНИЕ СПОЙЛЕРЫ!!!11:</small> А еще ты съешь дерьма в конце)))))0');

        // Serejka part. (Anton, sosi, ne 4itai)
        bigbox.timeout = 3000;
        bigbox.log('<small>СЕРЕЖКА:</small> Антошик привет, я среежка Хомич, твой рыжий друг, поздравляю тебя)) понеслась');
        bigbox.log('<small>СЕРЕЖКА:</small> жопа гниль трусы и водку поздравляю я антошку');
        bigbox.log('<small>СЕРЕЖКА:</small> будем весело плесать только водку не бухать');
        bigbox.log('<small>СЕРЕЖКА:</small> фан, мозги, стростей взаимных, скила, во всём всегда и навсегда');
        bigbox.log('<small>СЕРЕЖКА:</small> летя, вегзде, сквозь чушь-пространства состояньем, лишь - самим себя');

        // Yana part.
        bigbox.log('<small>ЯНОЧКА:</small> Тошечка картлеточка привет, я Яночка, я буду лаконичка и легка)');
        bigbox.timeout = 10000;

        // Antoshka part
        bigbox.log('<small>ЯНОЧКА:</small> Тотошик, мой Альфа, Поздравляю с Днём Рождения) Четвертинку отметим уже вместе) начался обратный отсчет! Пусть следующий год летит быстро и продуктивно! Хоть ты и далеко, но всегда рядом! Люблю тебя');
        bigbox.log('<small>АНТОШКА:</small> Спасибо мальчики и девочки, было очень всё приятно и противно');
        bigbox.log('<small>АНТОШКА:</small> А теперь скушаю говница и спать, чмоки чмоки :***');

    }


    $('#traveler').parallax("50%", 0.5);



    $("#n1").css({opacity: '1'}, 1);

    $("#n1").hover(function () {
        $("#b1").fadeToggle(0.5);
    });
    $("#n2").hover(function () {
        $("#b2").fadeToggle(0.5);
    });
    $("#n3").hover(function () {
        $("#b3").fadeToggle(0.5);
    });
    $("#n4").hover(function () {
        $("#b4").fadeToggle(0.5);
    });
    $("#n5").hover(function () {
        $("#b5").fadeToggle(0.5);
    });
    $("#n6").hover(function () {
        $("#b6").fadeToggle(0.5);
    });
    $("#n7").hover(function () {
        $("#b7").fadeToggle(0.5);
    });
    $("#n8").hover(function () {
        $("#b8").fadeToggle(0.5);
    });
    $("#n9").hover(function () {
        $("#b9").fadeToggle(0.5);
    });
    $("#n10").hover(function () {
        $("#b10").fadeToggle(0.5);
    });
    $("#n11").hover(function () {
        $("#b11").fadeToggle(0.5);
    });
    $("#n12").hover(function () {
        $("#b12").fadeToggle(0.5);
    });
    $("#n13").hover(function () {
        $("#b13").fadeToggle(0.5);
    });
    $("#n14").hover(function () {
        $("#b14").fadeToggle(0.5);
    });
    $("#n15").hover(function () {
        $("#b15").fadeToggle(0.5);
    });
    $("#n16").hover(function () {
        $("#b16").fadeToggle(0.5);
    });
    $("#n17").hover(function () {
        $("#b17").fadeToggle(0.5);
    });
    $("#n18").hover(function () {
        $("#b18").fadeToggle(0.5);
    });
    $("#n19").hover(function () {
        $("#b19").fadeToggle(0.5);
    });
    $("#n20").hover(function () {
        $("#b20").fadeToggle(0.5);
    });

    /*	  $("#share").hover(function(){
     $("#content").slideToggle(100)
     $("#share a").animate({opacity:'1'}, 1);

     });
     $("#share").mouseleave(function() {
     $("#share a").animate({opacity:'0.4'}, 1);
     });*/


});
