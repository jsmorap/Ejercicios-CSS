$(document).ready(function(){

    //Clase Active en el primer enlace
    $('.category_list .category_item[category="all"]').addClass('ct_item-active');


    //filtrando los animales
    $('.category_item').click(function(){

        //Muestra la categoria por consola
        var catAnimal = $(this).attr('category');
        console.log(catAnimal);

        //Clase Active al enlace seleccionado
        $('.category_item').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');

        //Ocultando animales
        $('.animal-item').css('transform', 'scale(0)');
        function hideAnimal(){
            $('.animal-item').hide();
        } setTimeout(hideAnimal,400);

        //Mostrando animales
        function showAnimal(){
        $('.animal-item[category="'+catAnimal+'"]').show();
        $('.animal-item[category="'+catAnimal+'"]').css('transform', 'scale(1)');
        } setTimeout(showAnimal, 400);
    });


        //Mostrando todos los animales
    $('.category_item[category="all"]').click(function(){
        function showAll(){
            $('.animal-item').show();
            $('.animal-item').css('transform', 'scale(1)');
        } setTimeout(showAll, 400);
    })

});