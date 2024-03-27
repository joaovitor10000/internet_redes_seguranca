//Esse Java vai muda algumas palavras.//
function cripto(){
    //O text do Html vai se trasfomar em valor.//
    let text= document.getElementById('text').value
     //Aqui são as palavras fatiadas.//
     let split= text.split("")
     //a gente vai contar quantas partes fatiadas tem no texto.//
     let chars= split.length
     //isso é um array //
     const pre=['Z','E','N','I','T','P','O','L','A','R','z','e','n','i','t','p','o','l','a','r',]

     const pos=['P','O','L','A','R','Z','E','N','I','T','p','o','l','a','r','z','e','n','i','a',]
    
     let rslt = document.getElementById('result')
     
      for (i = 0 ; i < chars; i++ ) {
        let index = pre. indexOf(split[i])

        if (index ===-1 ){
        split[i] = split [i]
        } else {

            split[i] = pos [index]
        }
        const toString = split.join('')
        
        rslt.innerText = toString
        //console.log(split[i])
      }

     
     

}