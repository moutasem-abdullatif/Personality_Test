var soruNo = 1;
var current=0;
var max;
var largest;
var karakter=
    [
        {karakter:"kirmizi",toplam:0},
        {karakter:"sari",toplam:0},
        {karakter:"yesil",toplam:0},
        {karakter:"mavi",toplam:0}
    ];



$("#submit-btn").click(function () {

    $('.choice-item').each(function (elem) {
        if($(this).hasClass('selected-1')){
            switch ($(this).data("sinif")){
                case "A": karakter[0].toplam+=2;break;
                case "B": karakter[1].toplam+=2;break;
                case "C": karakter[2].toplam+=2;break;
                case "D": karakter[3].toplam+=2;break;
            }
        }else if($(this).hasClass('selected-2')){
            switch ($(this).data("sinif")){
                case "A": karakter[0].toplam++;break;
                case "B": karakter[1].toplam++;break;
                case "C": karakter[2].toplam++;break;
                case "D": karakter[3].toplam++;break;
            }
        }
    });
        max = karakter[0];
        for(var i=0 ; i<karakter.length;i++){
            if(karakter[i].toplam>max.toplam){
                max=karakter[i];
            }
        }

        $("#karakter-tipi").val(max.karakter);
        $("#test-form").submit();
});

$('#next').click(function () {
    current=0;

    var soru = "#soru" + soruNo;
    $(soru).parent().animate({
        left: '-50%'
    }, 250,function () {
        $(soru).parent().css('left','150%');
    });

    $(soru).parent().next().animate({
        left: '50%'
    }, 250);

    soruNo++;
    $(this).prop('disabled',true);
    if(soruNo===15){
        $(this).hide();
        $('#submit-btn')
            .show()
            .prop('disabled',true);

    }
});

$('.choice-item').click(function () {

    if(current>=1) {
        if ($(this).hasClass('selected-1') || $(this).hasClass('selected-2')) {
            $(this).parent().children('a:not(.selected-1):not(.selected-2)').removeClass('disable');
            $(this)
                .prop('class','list-group-item choice-item')
                .css('borderRight', '')
                .find('i')
                .removeClass('fa fa-check');
            current--;
            if(current<1){
                $('#next').prop('disabled',true);
                $('#submit-btn').prop('disabled',true);
            }
            return false;
        }
    }

    if(current===0){
        $('#next').prop('disabled',false);
        $('#submit-btn').prop('disabled',false);
        $(this)
            .addClass('selected-1')
            .css('borderRight','5px solid #D9534F')
            .find('i')
            .addClass('fa fa-check');

        current++;

        return false;
    }else if(current===1){
        $(this)
            .addClass('selected-2')
            .css('borderRight','5px solid #F0AD4E')
            .find('i:first-child')
            .addClass('fa fa-check');
        current++;

        $(this).parent().children('a:not(.selected-1):not(.selected-2)').addClass('disable');
        return false;
    }

});
/**
 * Created by moutasem on 4/8/2017.
 */
