import React, {useState} from 'react';
import useData from '../data/listas';
import FormAddLista from './FormAddLista';

import { AddCircleOutline } from '@material-ui/icons';



const Listas = (props) => {

    const [listas, atualizarListas, atualizarLista] = useData();
    const [formHidden, setFormHidden] = useState(true);
    
 

    function selectList(id){
        console.log("id",id);
        
        let novaLista = listas.map(li=>{
            if(li.id === id){
                 li.selected = true
                 return li
            }else{
                li.selected = false
                return li
            }
        })

        console.log("novaLista",novaLista);
         atualizarListas(novaLista);
    }

    function addLista(){
        //abrir form
        
        setFormHidden(!formHidden);
    }

    function renderLists(){
        var lis = listas.map(lista=>{
            return <li className={ lista.selected  ? 'selected' : ''} key={lista.id} onClick={()=>selectList(lista.id)}><a>{lista.nome}</a></li>
       })

       console.log(lis)
       return lis;
    }

    return (
        <section>
            <h3>Listas </h3>
            <span className={formHidden === true? 'add-icon' : 'add-icon add-selected'} onClick={()=>addLista()} ><AddCircleOutline/><span>add</span></span>
            <FormAddLista formHidden={formHidden} setFormHidden={setFormHidden} listas={listas} atualizarListas={atualizarListas} selectList={selectList} />
            <ul>
                {renderLists()}                
            </ul>
        </section>
    );
}

export default Listas;
