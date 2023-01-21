function main()
{
    $('.projects').hide();
    $('.projects-button').on("click", function(){
        $('.projects').toggle();
    });
}
$(document).ready(main);