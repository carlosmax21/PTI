$(document).ready(function()
{
    $('.btnDetails').on('click',function(e)
    {
		let productModal = $('#productModal');
        productModal.modal('show');
        
        let img     = $(this).closest('.col-item').find('img').attr('src');
        let name    = $(this).closest('.info').find('#name').html();
        let price   = $(this).closest('.info').find('#price').html();
        let rating  = $(this).closest('.info').find('#rating').html();
        productModal.find('img').attr('src', img);
        productModal.find('#name').html(name);
        productModal.find('#price').html(price);
        productModal.find('#rating').html(rating);
	})
});

$(document).ready(function()
{
    let index = 1;
    $('.btnAdd').on('click',function()
    {
        let Name    = $(this).closest('.info').find('#name').html();
        let Price   = $(this).closest('.info').find('#price').html();
        let Rating  = $(this).closest('.info').find('#rating').html();

        let input = "<tr><td>" +index+"</td><td>"+Name+"</td><td>"+Price+"</td><td>"+Rating +"</td></tr>";
        $("#list tbody").append(input);
        index++;
    })
});