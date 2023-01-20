function main()
{
    $('.projects').hide();
    $('.projects-button').on("click", function(){
        $('.projects').show();
    });
}
$(document).ready(main);