$(document).ready(function () {


    var alturaDaTela = window.innerHeight;
    

    var cont = 0;

//     $('#seta').click(function () {
//         $(' html, body').animate({ 'scrollTop': 0 }, 500);
//     });
    
//     $(window).on("scroll", function () {

//         var scroll = $(this).scrollTop();

//         if (scroll < 100) {
//             $('.navbarTotal').css({ 'background-color': ''});
//             $('.nav-link').css({ 'color': 'white' });
//             $('#footer').hide("slow")
//             $('.navbar-brand').attr('src', 'img/cristal2Branca.png');
//         }
        
//         if (scroll > 100) {
//             $('.navbar-brand').attr('src', 'img/cristal2Preta.png');
//             $('.navbarTotal').css({'background-color': '#f9f9f9' });
//             $('.nav-link').css({ 'color': 'black' });
//             $('#footer').show("slow")


//         }
//         if (scroll >= 0 && scroll < 300) {

//             $('#seta').hide("slow");

//         }
//         if (scroll >= 300) {
//             cont++;
//             $('#seta').show("slow").css({ 'opacity': 1 });

//         }

//     });

});




var _AlturaDocumento = $(window).height(); //pega altura da janela

function AlturaSecao() {
    $('.secao').height(_AlturaDocumento); //atribui o valor da variável a todas as divs com a classe secao
}

function ScrollSecao() {
    console.log('entrou');
    var body = $('html, body');
    if ($(this).parent('.secao').is('#secao-01')) {
        //verifica se está na primeira seção e rola para a segunda
        body.animate({ scrollTop: _AlturaDocumento }, '500');
    } else if ($(this).parent('.secao').is('#secao-02')) {
        //verifica se está na segunda seção e rola para a terceira
        body.animate({ scrollTop: _AlturaDocumento * 2 }, '500');
    }
}

$('.icone-scroll').click(ScrollSecao); //chama a função na ação de click no ícone

$(AlturaSecao); //chama a nossa função só depois que o documento estiver completamente carregado