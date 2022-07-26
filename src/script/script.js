const c = (el)=>document.querySelector(el);
const cAll = (el)=>document.querySelectorAll(el);
let valorPizza = 0

pizzasJson.map((item, index)=>{
    let pizzaItem = c('.modeloGeral .modelo li').cloneNode(true);

    pizzaItem.querySelector('.item').setAttribute('data-key', index);
    pizzaItem.querySelector('span').innerHTML = item.sabor;
    pizzaItem.querySelector('img').src = item.img;;
    pizzaItem.querySelector('button').addEventListener('click', (e)=>{
        let key = e.target.closest('.item').getAttribute('data-key');
        qtdPizzas = 1
        valorPizza = pizzasJson[key].valor

        c('.pizzaInfo .pizza img').src = pizzasJson[key].img;
        c('.pizzaInfo .pizza Span').innerHTML = pizzasJson[key].sabor;
        c('.subContainer .descricao p').innerHTML = pizzasJson[key].description;
        c('.pizzaInfo--actualPrice').innerHTML = 'R$' + pizzasJson[key].valor.toFixed(2);
        c('.pizzaInfo--size.selected').classList.remove('selected')
        cAll('.pizzaInfo--size').forEach((size, sizeindex)=>{
            if(sizeindex == 2){
                size.classList.add('selected')
            }
            size.querySelector('span').innerHTML = pizzasJson[key].tamanhos[sizeindex];
        })
        c('.pizzaInfo--qt').innerHTML = qtdPizzas;

        c('.pizzaInfo').style.opacity = 0;
        c('.pizzaInfo').style.display = 'flex';
        setTimeout(()=>{
            c('.pizzaInfo').style.opacity = 1;
        }, 200);
    })

    c('.areaPizza ul').append(pizzaItem);
})
let qtdPizzas = 1

function maisMenos(soma){
    
    if(soma == 'mais'){
        qtdPizzas += 1
    }else if(soma == 'menos' && qtdPizzas >= 2){
        qtdPizzas -= 1 
    }
    let valorTot = qtdPizzas * valorPizza
    c('.pizzaInfo--qt').innerHTML = qtdPizzas;
    c('.pizzaInfo--actualPrice').innerHTML = 'R$' + valorTot.toFixed(2);
}
function tamanhoSelected(tamanho){
    if(tamanho == 'P'){
        c('.tamanho1').classList.add('selected')
        c('.tamanho2').classList.remove('selected')
        c('.tamanho3').classList.remove('selected')
    }else if(tamanho == 'M'){
        c('.tamanho2').classList.add('selected')
        c('.tamanho1').classList.remove('selected')
        c('.tamanho3').classList.remove('selected')
    }else if(tamanho == 'G'){
        c('.tamanho3').classList.add('selected')
        c('.tamanho1').classList.remove('selected')
        c('.tamanho2').classList.remove('selected')
    }
}
function fechar(){
    c('.pizzaInfo').setAttribute('style', 'display:none');
}



/*Menu retratiç */
function abrirFechar(){
    let menu = document.querySelector('.menu_retratil');
    let btnAbrir = document.querySelector('.btnAbrir');
    let btnFechar = document.querySelector('.btnFechar');

    if(menu.classList.contains('menu_aberto') == true){
        menu.classList.remove('menu_aberto');
        btnAbrir.classList.remove('esconder');
        btnFechar.classList.add('esconder');
    }else{
        menu.classList.add('menu_aberto');
        btnAbrir.classList.add('esconder');
        btnFechar.classList.remove('esconder');
    }
}

var carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
function adicionar(sabor){
    
    carrinho.push(sabor)
    localStorage.setItem('carrinho', JSON.stringify(carrinho))
}

let menuCarrinho = document.querySelector('#carrinho')

function zerar(){
    carrinho.splice(0, carrinho.length)
    localStorage.setItem('carrinho', [])
    menuCarrinho.innerHTML = carrinho
}

for(let i in carrinho){
    let itemCarrinho = '<li>'+carrinho[i]+'</li>'

    menuCarrinho.innerHTML += itemCarrinho
}
