var soruNo = 1;
var current=0;

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
        $('.next-button').append('<button id="submit-btn" class="btn btn-danger btn-block">Submit</button>')
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
            }
            return false;
        }
    }

    if(current===0){
        $('#next').prop('disabled',false);
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
