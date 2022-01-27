function selecionar(item, id){
    if (item != null){
        document.getElementById(item).style.border = "none";
        document.getElementById(id).style.border = "5px solid green";
        
    }else{
        document.getElementById(id).style.border = "5px solid green";

    }

    // return item

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

    let itemSelecionadoPrato = elementoSelecionado("pratos")
    let itemSelecionadoBebida = elementoSelecionado("bebidas")
    let itemSelecionadoSobremesa = elementoSelecionado("sobremesas")

    if(itemSelecionadoPrato != null && itemSelecionadoBebida != null && itemSelecionadoSobremesa != null){
        document.getElementById("pedido").style.backgroundColor = "rgba(50, 183, 47, 1)";
    }
 
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

