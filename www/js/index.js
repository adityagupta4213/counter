var count = 0;

$('.add-btn').on('click', function(){
    count += 1;
    updateCounter();
});

function updateCounter(){
    $('#count').text(count);
}
updateCounter();

$('#reset').on('click', function(){
    count = 0;
    updateCounter();
})