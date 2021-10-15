$(document).ready(function(){
    $("#accordion").accordion({
        collapsible: true
    });
    let dialog = $('#dialog-form').dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            "Add New Order": function(){
                let nama = $("#nama").val()
                let price = $("#price").val()
                let deposit = $("#deposit").val()
                let room
                if(price == "200")
                {
                    room  = "Single"
                }
                else if(price == "350")
                {
                    room  = "Double"
                }
                else if(price == "600")
                {
                    room  = "Duplex"
                }
                else if(price == "1000")
                {
                    room  = "Cabana"
                }
                let newcontent = "<tr><td>" + nama + "</td><td>" + room + "</td><td>" +"$" +deposit + "</td></tr>"
                $("#tableOrder").append(newcontent)
                dialog.dialog("close");
            },
            Cancel: function(){
                dialog.dialog("close");
            }
        },
        close: function(){
            form[0].reset();
        }
    });
    
    $('.btnAddOrder').on('click',function(){
        if(this.id == "single")
        {
            $('#price').val("200");
        }
        else if(this.id=="double")
        {
            $('#price').val("350");
        }
        else if(this.id=="duplex")
        {
            $('#price').val("600");
        }
        else if(this.id=="cabana")
        {
            $('#price').val("1000");
        }
        dialog.dialog('open');
    });


});
