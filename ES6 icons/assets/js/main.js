array.forEach((element)  => {

    $('ul#listObj').append(`<li class = '${element.type}'><i class= '${element.family} ${element.prefix}${element.name}  '></i>${element.name}</li>`)

});

$('.invisible').hide();

$('.select').click(function(){
    $('.invisible').show();
    $(this).mouseleave(function(){
        $('.invisible').hide();
    });
});



$('#all').click(function(){
    $('li.animal, li.vegetable, li.user').show();
})

$('#animal').click(function(){
    $('li.animal, li.vegetable, li.user').show();
    $('li.vegetable, li.user').hide();
})

$('#vegetable').click(function(){
    $('li.animal, li.vegetable, li.user').show();
    $('li.animal, li.user').hide();
})

$('#user').click(function(){
    $('li.animal, li.vegetable, li.user').show();
    $('li.animal, li.vegetable').hide();
})