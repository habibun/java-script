function main()
{
    $('.projects').hide();
    $('.projects-button').on("click", function(){
        $('.projects').toggle();
        $('.projects-button').toggleClass('active');
    });
}
$(document).ready(main);