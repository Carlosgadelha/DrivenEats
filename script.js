let msg = ""

function selecionarItem(tipoProduto, item){

    const itemSelecionado = document.querySelector(tipoProduto +' .selecionado')
    
    if (itemSelecionado != null){
        itemSelecionado.classList.remove('selecionado')
        const produto = document.querySelector(item);
        produto.classList.add("selecionado")
    
    }{
        const produto = document.querySelector(item);
        produto.classList.add("selecionado")
    } 
       
    ativarBotaoPrdido()
 } 

 function enviarPedido(){

    let botaoAtivado = document.querySelector('.confirmarPedido')
    if( botaoAtivado != null){
        window.open("https://wa.me/55088994786814?text="+msg )

    }

    
 }


 function ativarBotaoPrdido(){

    let text = ""
    let itemSelecionadoPrato = document.querySelector('.pratos' +' .selecionado') 
    let itemSelecionadoBebida = document.querySelector('.bebidas' +' .selecionado') 
    let itemSelecionadoSobremesa = document.querySelector('.sobremesas' +' .selecionado') 
    
    //console.log(itemSelecionadoPrato.querySelector('.nome').innerHTML)

    if(itemSelecionadoPrato != null && itemSelecionadoBebida != null && itemSelecionadoSobremesa != null){
        let botao = document.querySelector('.pedido')
        botao.innerHTML= "Fechar pedido"
        botao.classList.add("confirmarPedido")


        let [nomePrato, precoPrato] = obterNomePreco(itemSelecionadoPrato)
        let [nomeBebida, precoBebida] = obterNomePreco(itemSelecionadoBebida)
        let [nomeSobremesa, precoSobremesa] = obterNomePreco(itemSelecionadoSobremesa)


        
        let total = precoPrato + precoBebida + precoSobremesa

        text = `Olá, gostaria de fazer o pedido:
        - Prato: ${nomePrato}
        - Bebida: ${nomeBebida}
        - Sobremesa: ${nomeSobremesa}
        Total: R$ ${total.toFixed(2)}`

        msg = encodeURIComponent(text)

    }
 
}

function obterNomePreco(itemSelecionado){

    let nome = itemSelecionado.querySelector('.nome').innerHTML
    
    let preco = itemSelecionado.querySelector('.preco').innerHTML
        preco = preco.replace('R$','')
        preco = preco.replace(',','.')

    let precoFormatado = parseFloat(preco)
        
    
    return [nome, precoFormatado]
}
    


