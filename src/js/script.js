jQuery(function($){
    $("#phone").mask("+7 (999) 999-9999");
 });




function slideIn(item) {

    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $(".card__content_more").eq(i).addClass('card__content_more_active');
            $(".card__content_more_second").eq(i).addClass('card__content_more_second_active');
            $(".service__items_card_content").eq(i).addClass('service__items_card_content_active');
            $(".card__icon").eq(i).addClass('card__icon_active');
        })
    });

};

function slideOut(item) {

    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $(".card__content_more").eq(i).removeClass('card__content_more_active');
            $(".card__content_more_second").eq(i).removeClass('card__content_more_second_active');
            $(".service__items_card_content").eq(i).removeClass('service__items_card_content_active');
            $(".card__icon").eq(i).removeClass('card__icon_active');
        })
    });

};

slideIn('.card__button_more');

slideOut('.card__content_more_button');

// $(".card__button_more").on('click', function(){
    
//     $(".card__content_more").addClass('card__content_more_active');
//     $(".card__content_more_second").addClass('card__content_more_second_active');
//     $(".service__items_card_content").addClass('service__items_card_content_active');
//     $(".card__icon").addClass('card__icon_active');
// });

// $(".card__content_more_button").on('click', function(){
//     $(".card__content_more").removeClass('card__content_more_active');
//     $(".card__content_more_second").removeClass('card__content_more_second_active');
//     $(".service__items_card_content").removeClass('service__items_card_content_active');
//     $(".card__icon").removeClass('card__icon_active');
// });


// $("#btnMoreBack").on('click', function(){
//     $("#cardContent").remoweClass('card__content_more_active');
//     // $("choose_town").removeClass('hidden'); 
// });


// let btnMoreBack = document.querySelector('#btnMoreBack');

// let btnMore = document.querySelector('#btnMore');

// let cardContent = document.querySelector('#cardContent');

//     btnMore.addEventListener('click', function(){
//         cardContent.classList.add('card__content_more_active');
//     });

//     btnMoreBack.addEventListener('click', function(){
//         cardContent.classList.remove('card__content_more_active');
//     });


// $('.questionItem').click(function(){
//     $(this).addClass('active').siblings().removeClass('active');
//   });
