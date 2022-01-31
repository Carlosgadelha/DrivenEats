// function selecionarItem(item, tipoProduto){

//     const produto = document.querySelector('.'+ tipoProduto + '.selecionado');

//     if (produto != null){
//         produto.classList.remove('selecionado')
//     } else{
//         document.querySelector('.'+ tipoProduto + '.selecionado')

//     }

// }


function selecionar(item, id){

    if (item != null){
        document.getElementById(item).style.border = "none";
        document.getElementById(id).style.border = "5px solid green";
        
    }else{
        document.getElementById(id).style.border = "5px solid green";

    }

    // return item

}

function elementoSelecionado(produto){
    const produtos = document.getElementById(produto).children
    for( let i  = 0; i < produtos.length; i++ ){
        let id = produtos[i].getAttribute("id");
        let borda = document.getElementById(id).getAttribute("style");


        if( borda === "border: 5px solid green;"){
          return id;
        }
    }

}

function selecaoPrato(id){

    let itemSelecionado = elementoSelecionado("pratos")
    selecionar(itemSelecionado, id)
    ativarBotaoPrdido()

}

function selecaoBebida(id){

    let itemSelecionado = elementoSelecionado("bebidas")
    selecionar(itemSelecionado, id)
    ativarBotaoPrdido()

}

function selecaoSobremesa(id){

    let itemSelecionado = elementoSelecionado("sobremesas")
    selecionar(itemSelecionado, id)
    ativarBotaoPrdido()

}

function ativarBotaoPrdido(){
    let text = ""
    let itemSelecionadoPrato = elementoSelecionado("pratos")
    let itemSelecionadoBebida = elementoSelecionado("bebidas")
    let itemSelecionadoSobremesa = elementoSelecionado("sobremesas")
    
    
    // console.log(preco);

    if(itemSelecionadoPrato != null && itemSelecionadoBebida != null && itemSelecionadoSobremesa != null){
        document.getElementById("pedido").style.backgroundColor = "rgba(50, 183, 47, 1)";

        // console.log( document.getElementById(itemSelecionadoPrato ).children[0].children[3].innerHTML)

        let {nomePrato, precoPrato} = obterNomePreco(itemSelecionadoPrato)
        let {nomeBebida, precoBebida} = obterNomePreco(itemSelecionadoBebida)
        let {nomeSobremesa, precoSobremesa} = obterNomePreco(itemSelecionadoSobremesa)
         
        console.log(nomeBebida)
        // text = `${nomePrato}   ${precoPrato}  `
        // console.log(text)
    }
 
}

function obterNomePreco(itemSelecionado){

    let nome = document.getElementById(itemSelecionado).children[0].children[1].innerHTML
    
    let preco = document.getElementById(itemSelecionado).children[0].children[3].innerHTML
    

    return {nome, preco}
}



