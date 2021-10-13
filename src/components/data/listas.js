import React, {useState} from 'react'

function useData(){

    const [listas, setListas] = useState(getListas());

    function getListas() {
    
    
        var dataListas = [
            {
                id:0,
                nome: "Todas",
                selected:true
            },
            {
                id:1,
                nome: "Lista 1",
                selected:false
            }
           
            
        ]
    
        return dataListas;
    }
    
    function atualizarListas(novaLista){
        setListas(novaLista)
    }

    function atualizarLista(id, valor){
        var novaLista = listas.map(li=>{
            if(li.id === id){
                li.id = id;
                li.nome = valor
            }
        })
    
        setListas(novaLista)
    }

    return [listas, atualizarListas, atualizarLista]
}

export default useData;
