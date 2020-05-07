let counter = 0;
$('.show-more').on('click', () => {
    counter++;
    if (counter === 1) {
        $('.main-container-c')
            .append('<div class="img-wrapper">' +
                '<div class="icon-wrapper">' +
                '<div class="icons-1"><p>123</p></div>' +
                '<div class="icons-2"><p>1</p></div></div>' +
                '<img src="picture/12.jpg" alt="12.jpg" class="img-c" id="id_12"></div>')
            .append('<div class="img-wrapper">' +
                '<div class="icon-wrapper">' +
                '<div class="icons-1"><p>123</p></div>' +
                '<div class="icons-2"><p>1</p></div></div>' +
                '<img src="picture/13.jpg" alt="13.jpg" class="img-c" id="id_13"></div>')
            .append('<div class="img-wrapper">' +
                '<div class="icon-wrapper">' +
                '<div class="icons-1"><p>123</p></div>' +
                '<div class="icons-2"><p>1</p></div></div>' +
                '<img src="picture/14.jpg" alt="14.jpg" class="img-c" id="id_14"></div>');
    }else if (counter === 2) {
        $('.main-container-c')
            .append('<div class="img-wrapper">' +
                '<div class="icon-wrapper">' +
                '<div class="icons-1"><p>123</p></div>' +
                '<div class="icons-2"><p>1</p></div></div>' +
                '<img src="picture/15.jpg" alt="15.jpg" class="img-c"></div>')
            .append('<div class="img-wrapper">' +
                '<div class="icon-wrapper">' +
                '<div class="icons-1"><p>123</p></div>' +
                '<div class="icons-2"><p>1</p></div></div>' +
                '<img src="picture/16.jpg" alt="16.jpg" class="img-c"></div>')
            .append('<div class="img-wrapper">' +
                '<div class="icon-wrapper">' +
                '<div class="icons-1"><p>123</p></div>' +
                '<div class="icons-2"><p>1</p></div></div>' +
                '<img src="picture/17.jpg" alt="17.jpg" class="img-c"></div>');
    }else if (counter === 3) {
        $('.main-container-c')
            .append('<div class="img-wrapper">' +
                '<div class="icon-wrapper">' +
                '<div class="icons-1"><p>123</p></div>' +
                '<div class="icons-2"><p>1</p></div></div>' +
                '<img src="picture/18.jpg" alt="18.jpg" class="img-c"></div>')
            .append('<div class="img-wrapper">' +
                '<div class="icon-wrapper">' +
                '<div class="icons-1"><p>123</p></div>' +
                '<div class="icons-2"><p>1</p></div></div>' +
                '<img src="picture/19.jpg" alt="19.jpg" class="img-c"></div>')
            .append('<div class="img-wrapper">' +
                '<div class="icon-wrapper">' +
                '<div class="icons-1"><p>123</p></div>' +
                '<div class="icons-2"><p>1</p></div></div>' +
                '<img src="picture/20.jpg" alt="20.jpg" class="img-c"></div>');
    } else {
        alert('oops... no more images');
    }
});

$('img').on('click', (e) => {
    let imgId = document.getElementById('big-img-id');
    let imgBackground = document.getElementById('big-img-id-back');
    imgId.style.display = 'block';
    imgBackground.style.display = 'block';
    let srcAtr = e.target.id;
    let tempImg = document.getElementById(srcAtr);
    $('#big-img-id').append(tempImg);
});
