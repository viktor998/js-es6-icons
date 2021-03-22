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
    $('#all-active').text('All');
    $('li.animal, li.vegetable, li.user').show();
})

$('#animal').click(function(){
    $('li.animal, li.vegetable, li.user').show();
    $('#all-active').text('Animal');
    $('li.vegetable, li.user').hide();
})

$('#vegetable').click(function(){
    $('li.animal, li.vegetable, li.user').show();
    $('#all-active').text('Vegetable');
    $('li.animal, li.user').hide();
})

$('#user').click(function(){
    $('li.animal, li.vegetable, li.user').show();
    $('#all-active').text('User');
    $('li.animal, li.vegetable').hide();
})