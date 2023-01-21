function main()
{
    $('.projects').hide();
    $('.projects-button').on("click", function(){
        $('.projects').toggle();
        $(this).toggleClass('active');
    });
}
$(document).ready(main);