var colors = ['red', 'blue', 'green', 'maroon', 'crimson', 'teal', 'seinna'];
i = 0;

$("#change-colour").click(function(){
    $("div").css("background", colors[i]);
    i = (i==colors.length-1) ? 0 : (i+1);
});