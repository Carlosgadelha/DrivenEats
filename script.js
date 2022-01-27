function selecionar(){

}

function selecaoPrato(id){

    let selecionado = elementoSelecionado()
    if (selecionado != null){
        document.getElementById(selecionado).style.border = "none";
        document.getElementById(id).style.border = "5px solid green";
        
        console.log(selecionado)
    }else{
        document.getElementById(id).style.border = "5px solid green";

    }
    
    // //console.log(selecionado)
    // if( selecionado != null){
        
        
    //     selecionado = id;
            
    //     // if(selecionado != null){
    //     //     
    //     // }
        
    //     //console.log(selecionado)
        
    // }

}



function elementoSelecionado(){
    const produtos = document.getElementById("pratos").children
    for( let i  = 0; i < produtos.length; i++ ){
        let id = produtos[i].getAttribute("id");
        let borda = document.getElementById(id).getAttribute("style");


        if( borda === "border: 5px solid green;"){
          return id;
        }
    }

    // let lista = produtos.map((element )=> {
    //     return element[0].getAttribute("id")
    // });

    
    // console.log(produtos[0].getAttribute("id").getAttribute("style"))
    
       
    // for( let i  = 0; i < produtos.lenght; i++ ){
    //     let id = produtos[i].getAttribute("id");
    //     console.log("id")
    //     // console.log(document.getElementById(id).getAttribute("style"))

    // //    console.log(produtos[i].getAttribute("border"))
    // //    if(document.getElementById(id).getAttribute("style") == "5px solid green"){
    // //        console.log("true");
    //     //    produtos[i].style.border = "none"

    //    }

    }

