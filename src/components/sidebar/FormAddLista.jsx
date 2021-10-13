import { CancelSharp } from '@material-ui/icons';
import React, {useState} from 'react';

const FormAddLista = (props) => {

    const [newListName, setNewListName] = useState('');
    const [list_id, setListId] = useState(1) 

    function addLista(){
        let n = list_id + 1; 
        setListId(n)

        let model = {
            id: n,
            nome:newListName,
            selected:true
        }
        
        let listSelectedFalse = props.listas.map(li=>{
            li.selected = false;
            return li
        })

        setNewListName('');
        props.atualizarListas([...listSelectedFalse, model]);

        props.setFormHidden(true)
    }

    function cancelar(){
        props.setFormHidden(true)
    }

    return (
        <section hidden={props.formHidden} className="FormAddLista">
            <article>
                <label htmlFor="nome-lista">Adicione uma lista</label>
                <input type='text' id="nome-lista" value={newListName} onChange={(e)=>setNewListName(e.target.value)} placeholder="nome da lista" />
            </article>
            <article>
                <button onClick={()=>addLista()}>adicionar</button>
                <button onClick={()=>cancelar()} className="btn-secundary">cancelar</button>
            </article>
        </section>
    );
}

export default FormAddLista;
