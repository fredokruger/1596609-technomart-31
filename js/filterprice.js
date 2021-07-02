$(".filter-price__range").slider({
    min: 0,
    max: 50000,
    values: [2000, 30000],
    range: true,
    animate: "fast",
    slide : function(event, ui) {    
        $(".filter-price__input-price--min").val(ui.values[ 0 ]);   
        $(".filter-price__input-price--max").val(ui.values[ 1 ]);  
    }    
});
$(".filter-price__input-price--min").val($(".filter-price__range").slider("values", 0));
$(".filter-price__input-price--max").val($(".filter-price__range").slider("values", 1));
$(".filter-price__input-price").change(function() {
    var input_left = $(".filter-price__input-price--min").val().replace(/[^0-9]/g, ''),    
    opt_left = $(".filter-price__range").slider("option", "min"),
    where_right = $(".filter-price__range").slider("values", 1),
    input_right = $(".filter-price__input-price--max").val().replace(/[^0-9]/g, ''),    
    opt_right = $(".filter-price__range").slider("option", "max"),
    where_left = $(".filter-price__range").slider("values", 0); 
    if (input_left > where_right) { 
        input_left = where_right; 
    }
    if (input_left < opt_left) {
        input_left = opt_left; 
    }
    if (input_left == "") {
    input_left = 0;    
    }        
    if (input_right < where_left) { 
        input_right = where_left; 
    }
    if (input_right > opt_right) {
        input_right = opt_right; 
    }
    if (input_right == "") {
    input_right = 0;    
    }    
    $(".filter-price__input-price--min").val(input_left); 
    $(".filter-price__input-price--max").val(input_right); 
    if (input_left != where_left) {
        $(".filter-price__range").slider("values", 0, input_left);
    }
    if (input_right != where_right) {
        $(".filter-price__range").slider("values", 1, input_right);
    }
});