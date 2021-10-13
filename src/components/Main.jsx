import React from 'react';
import Header from './Header';
import Cards from './Cards';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { tarefas } from '../actions';

import '../components/static/Main.css';

const Main = (props) => {
    
    const { tasks } = props;
    
    console.log("tarefa", tasks)
    
    var cardWidth = tasks.length > 1? {width:'49%'} : {width:'32%'}

    return (
        <main className="Main">
            <Header />
            <section className="Card-container">
                {tasks.map(tarefa=>
                    <Cards 
                        key={tarefa.id} 
                        titulo={tarefa.titulo} 
                        descricao={tarefa.descricao} 
                        data={tarefa.dataEntrega}
                        cardWidth = {cardWidth} />
                )}
                
                {/* <Cards titulo="Titulo do card" descricao="fazer tarefa para revisão" data="26/07/2021"/> */}
            </section>
        </main>
    );
}

const mapStateToProps = store => ({
  tasks: store.tarefas.tarefas
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ tarefas }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);

