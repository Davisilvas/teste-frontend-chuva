
// *********FUNCTION THAT EXPANDS THE TEXT*********
const Clique = () =>{
    const texto = document.getElementById('texto');

    if(texto.classList =="off"){
        texto.classList = 'active';
        texto.innerHTML = '<p class="off" id="texto"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.</p>                <p class="off">Fusce vitae luctus dui. Donec id euismod mauris, in volutpat urna. Proin dapibus consequat feugiat. Proin dictum justo arcu, quis vestibulum augue lacinia quis. Sed dignissim dui nulla, ut faucibus mauris sodales id. Aliquam erat volutpat. Maecenas dolor enim, tincidunt id elit non, suscipit interdum turpis. Etiam finibus urna libero, eget interdum eros volutpat ullamcorper. Pellentesque et pretium lorem. Aenean interdum quis diam ac porttitor. Cras nec ipsum pulvinar, pharetra libero non, ornare enim. Etiam in laoreet odio.</p>                                           <p class="off">Nam eget tristique elit, at fermentum tellus. Mauris scelerisque ligula id eleifend feugiat. Donec eleifend vehicula sem nec dapibus. Integer scelerisque neque dui, in lacinia erat molestie eu. Phasellus maximus dui eget lacus porta tempor. Ut ex nibh, dignissim quis purus semper, efficitur facilisis turpis. Praesent blandit elementum ultricies. Aliquam sit amet enim sit amet nulla pulvinar lobortis consectetur non odio. Phasellus at lacus hendrerit, vulputate nisi sit amet, viverra mauris. Etiam eu scelerisque orci. Quisque sagittis, mi vitae pharetra iaculis, orci elit eleifend massa, eu posuere mauris odio id odio. Morbi eu libero luctus, consectetur lorem vel, interdum sapien. Aenean in porta arcu. Maecenas eu maximus massa.</p>                                         <p class="off">Praesent velit dolor, dignissim sed quam ac, efficitur porta justo. Pellentesque porta pharetra felis ut hendrerit. Nulla facilisi. Aliquam erat volutpat. Nunc sit amet faucibus quam. Maecenas dapibus luctus dolor at viverra. Duis nec fringilla libero. Duis risus nibh, viverra ac orci nec, iaculis dictum sem. Aliquam at malesuada arcu. Aliquam erat volutpat. Donec varius ipsum purus, ut vehicula purus placerat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> '

    }else{
        texto.classList = 'off';
        texto.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut.  Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.  Etiam aliquam dictum nisl, vel aliquet enim accumsan sit ametl accumsant...<span color: #FEB254> Ver mais</span>'
    }
}


// let add = () => {
//     const newTopic = document.getElementById('newTopic');
//     const notoTopico = document.getElementById('novoTopico');
    
    // if (newTopic.classList = 'discussions-newTopic'){
    //     notoTopico.remove();
    //     newTopic.innerHTML = "                                        <div class='insideButton'>                                    <span class='duvidaOuPergunta'class='spanButton'>Tem uma d??vida ou sugest??o? Compartilhe seu feedback com os autores!</span>                                                        <h2 class='t1'>Assunto</h2>                                 <input type='text' class='inputAssunto'>                        <h2 class='t2'>Conte??do</h2>                                <input type='text' class='inputConteudo'>                                          <img src='./assets/images/bold.png' class='bold'>                                               <img src='./assets/images/italic.png' class='italic'>                                                 <button class='sendButton'>Enviar<button>                               </div>"
    // }else{
    //     console.log('ta potente')
    // }
// }

let add = () => {
    const newTopic = document.querySelector('#newTopic');
    const discussions = document.querySelector('.discussions');
    const notoTopico = document.querySelector('.discussions #novoTopico');
    discussions.removeChild(notoTopico);


    
    if (newTopic.classList = 'discussions-newTopic'){
        newTopic.innerHTML = "                                        <div class='insideButton'>                                    <span class='duvidaOuPergunta'class='spanButton'>Tem uma d??vida ou sugest??o? Compartilhe seu feedback com os autores!</span>                                                        <h2 class='t1'>Assunto</h2>                                 <input type='text' class='inputAssunto'>                        <h2 class='t2'>Conte??do</h2>                                <input type='text' class='inputConteudo'>                                          <img src='./assets/images/bold.png' class='bold'>                                               <img src='./assets/images/italic.png' class='italic'>                                                 <button class='sendButton'>Enviar<button>                               </div>"
    }else{
        console.log('ta potente')
    }


}


    // let newDiv = document.createElement('div');
    // let content = document.innerHTML ="                                        <div class='insideButton'>                                    <span class='duvidaOuPergunta'class='spanButton'>Tem uma d??vida ou sugest??o? Compartilhe seu feedback com os autores!</span>                                                        <h2 class='t1'>Assunto</h2>                                 <input type='text' class='inputAssunto'>                        <h2 class='t2'>Conte??do</h2>                                <input type='text' class='inputConteudo'>                                          <img src='./assets/images/bold.png' class='bold'>                                               <img src='./assets/images/italic.png' class='italic'>                                                 <button class='sendButton'>Enviar<button>                               </div>"
    // newDiv = content