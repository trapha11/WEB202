
        $(document).ready(function(){
            //when shop hovered
            $("#dropdown span").click(function(e){
                event.preventDefault();
                $("#sub-nav").slideToggle('slow');
            });
            
            $("#sidebar1 b").click(function(e){
                event.preventDefault();
                $("#sub-sidebar1").slideToggle('slow');
            });
            
            $("#sidebar2 b").click(function(e){
                event.preventDefault();
                $("#sub-sidebar2").slideToggle('slow');
            });
            $("#sidebar3 b").click(function(e){
                event.preventDefault();
                $("#sub-sidebar3").slideToggle('slow');
            });

            //when Mobile Menu bar clicked
            $('#mobile-nav').click(function(e) {
                event.preventDefault();
                //images change
                $(this).toggleClass("minus");
                //menu dropped down
                $("#menu-dropdown").toggleClass('open');
            });
        });
