function main()
{
    $('.projects').hide();
    $('.projects-button').on("click", function(){
        $(this).next().toggle();
        $(this).toggleClass('active');
    });
}
$(document).ready(main);