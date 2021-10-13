import React, {useState} from 'react';
import { tarefas } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const AddTarefas = (props) => {

    const [task, setTask] = useState('');
    const [prazo, setPrazo] = useState("");
    const [descricao, setDescricao] = useState("");
    const { tarefas } = props;

    function addTask(){
        
        var t=[
            {
                id:3,
                dataEntrega:"02/08/2021",
                titulo:"Teste de nova tarefa",
                descricao:"Descrição da nova tarefa"
            }
            
        ];

        tarefas(t);
        console.log("click")
    }
    
    return (
        <section>
            <article>
                <label htmlFor="add-task">Adicionar Tarefa</label>
                <input type="text" id="add-task" value={task} onChange={(e)=>setTask(e.target.value)} placeholder="insira uma tarefa" />
            </article>
            <article>
                <label htmlFor="add-descricao">Adicionar Descrição</label>
                <textarea id="add-descricao" value={descricao} onChange={(e)=>setDescricao(e.target.value)} placeholder="insira uma descrição"></textarea>
            </article>
            <article>
                <label htmlFor="add-prazo">Entregar em</label>
                <input type="date" id="add-prazo" value={prazo} onChange={(e)=>setPrazo(e.target.value)} />
            </article>
            <article>
                <button onClick={()=>addTask()}>adicionar</button>
            </article>
        </section>
    );
}

const mapStateToProps = store => ({
  tasks: store.tarefas.tarefas

});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ tarefas }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddTarefas);


// export default AddTarefas;
