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

 function PedidoItens(){

    let botaoAtivado = document.querySelector('.confirmarPedido')
    if( botaoAtivado != null){
        let confirmarPedido = document.querySelector('.fundoTela')
            confirmarPedido.classList.remove('escondido')
        //window.open("https://wa.me/55088994786814?text="+msg )

        let nome = prompt(" Qual seu nome?")
        let endereco = prompt(" Qual o seu endereço? ")

        msg = `${msg} 


        nome: ${nome}
        endereço: ${endereco}`

        msg = encodeURIComponent(msg)

    }

    
 }

 function enviarPedido(){
     window.open("https://wa.me/55088994786814?text="+msg )
 }

 function cancelar(){
    document.querySelector('.fundoTela ').classList.add("escondido")


    const itemSelecionado = document.querySelectorAll('.selecionado')
        for( let i = 0 ; i< itemSelecionado.length; i++){
            itemSelecionado[i].classList.remove('selecionado')
        }

    document.querySelector('footer .pedido').classList.remove("confirmarPedido")
}




 function ativarBotaoPrdido(){

    let text = ""
    let itemSelecionadoPrato = document.querySelector('.pratos' +' .selecionado') 
    let itemSelecionadoBebida = document.querySelector('.bebidas' +' .selecionado') 
    let itemSelecionadoSobremesa = document.querySelector('.sobremesas' +' .selecionado') 
    
    //console.log(itemSelecionadoPrato.querySelector('.nome').innerHTML)

    if(itemSelecionadoPrato != null && itemSelecionadoBebida != null && itemSelecionadoSobremesa != null){
        let botao = document.querySelector('footer .pedido')
        botao.innerHTML= "Fechar pedido"
        botao.classList.add("confirmarPedido")


        let [nomePrato, precoPrato] = obterNomePreco(itemSelecionadoPrato)
        let [nomeBebida, precoBebida] = obterNomePreco(itemSelecionadoBebida)
        let [nomeSobremesa, precoSobremesa] = obterNomePreco(itemSelecionadoSobremesa)
        let total = ConverterPrecos(precoPrato) + ConverterPrecos(precoBebida) + ConverterPrecos(precoSobremesa)

        
        

        let PedidoNomePrato = document.querySelector('.telaConfirmarPedido .pedido .nomePrato')
        PedidoNomePrato.innerHTML= nomePrato

        let PedidoPrecoPrato = document.querySelector('.telaConfirmarPedido .pedido .precoPrato')
        PedidoPrecoPrato.innerHTML= precoPrato

        let PedidoNomeBebida = document.querySelector('.telaConfirmarPedido .pedido .nomeBebida')
        PedidoNomeBebida.innerHTML= nomeBebida

        let PedidoPrecoBebida = document.querySelector('.telaConfirmarPedido .pedido .precoBebida')
        PedidoPrecoBebida.innerHTML= precoBebida

        let PedidoNomeSobremesa = document.querySelector('.telaConfirmarPedido .pedido .nomeSobremesa')
        PedidoNomeSobremesa.innerHTML= nomeSobremesa

        let PedidoPrecoSobremesa = document.querySelector('.telaConfirmarPedido .pedido .precoSobremesa')
        PedidoPrecoSobremesa.innerHTML= precoSobremesa

        let PedidoValor = document.querySelector('.telaConfirmarPedido .pedido .valorTotal')
        PedidoValor.innerHTML= total.toFixed(2)
        

        msg = `Olá, gostaria de fazer o pedido:
        - Prato: ${nomePrato}
        - Bebida: ${nomeBebida}
        - Sobremesa: ${nomeSobremesa}
        Total: R$ ${total.toFixed(2)}`

        

    }
 
}

function ConverterPrecos(preco){
    
    preco = preco.replace('R$','')
    preco = preco.replace(',','.')

    let precoFormatado = parseFloat(preco)

    return precoFormatado
}

function obterNomePreco(itemSelecionado){

    let nome = itemSelecionado.querySelector('.nome').innerHTML
    
    let preco = itemSelecionado.querySelector('.preco').innerHTML
    
    return [nome, preco]
}
    


