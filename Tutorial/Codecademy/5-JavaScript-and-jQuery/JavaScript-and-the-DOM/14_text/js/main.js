function main()
{
    $('.projects').hide();
    $('.projects-button').on("click", function(){
        $(this).next().toggle();
        $(this).toggleClass('active');
        $(this).text('Projects Viewed');
    });
}
$(document).ready(main);