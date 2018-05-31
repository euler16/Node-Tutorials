$(document).ready(function() {

    // initial request for loading
    $.ajax({
        type: "GET",
        url : "/get",
        dataType:'json',
        success: function(res,status) {
            let id, name, html;
            for(let i=0; i<res.length; ++i) {
                id = res[i].id;
                name = res[i].name;
                html = `<li class="cart-item collection-item" id=${id}><h5>${name}</h5></li>`;
                $('.cart').append(html);
            }
            $('.cart-item').on('click',function(e){
                deleteClickHandler(this);
            })
        }
    })


   $('.inventory-item').on('click',function(e) {
       console.log('clicked');
       let price = $(this).attr('id');
       let name  = $(this).text();

       $.ajax({
           type: "POST",
           url : "/add",
           dataType: 'json',
           data: {
               name: name,
               price: price
           },
           success: function(res,status) {
               let newHTML = `<li class="cart-item collection-item" id=${res.id}><h5>${name}</h5></li>`
               $('.cart').append(newHTML);
               let list = $('.cart-item');
               $(list[list.length-1]).on('click',function(e) {
                   deleteClickHandler(this);
               })
               console.log('add successful');
           } 
       });
   });
   function deleteClickHandler(self) {
        console.log('delete click');
        let id = $(self).attr('id');
        console.log(id);
        $.ajax({
            type: "POST",
            url: "/delete",
            dataType: 'json',
            data: {
                id: id
            },
            success: function(res,status) {
                $(self).remove();
                console.log('successfully deleted');
            }
        });
   }
});