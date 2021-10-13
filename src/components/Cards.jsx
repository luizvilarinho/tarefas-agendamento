import React, {useState} from 'react';

import { DeleteForever, Label, LabelImportant, RemoveCircle, List, DragIndicator, Edit, Schedule } from '@material-ui/icons';
import '../components/static/Card.css';

const Cards = (props) => {

    

    function teste(){
        console.log("INPUT")

    }

    return (
        
            <article className="Cards" style={props.cardWidth}>
                <div className="content">
                   
                    <div className="prazo">
                        <DragIndicator/>
                        entrega: {props.data}
                    </div>
                    
                    <div className="title" onInput={()=>teste()} contentEditable spellCheck="false">
                        {props.titulo}
                    </div>
                    
                    <div className="description" contentEditable spellCheck="false">{props.descricao}</div>
                    
                    <div className="labels">
                        <LabelImportant />
                        <div className="label">
                            <span contentEditable>Nome do produto</span>
                        </div>
                        <div className="label">
                            <span contentEditable>status</span>
                        </div>
                    </div>
                    
                    
                    <div className="tags">
                        <span>
                            <Schedule/>
                            1 dia restante</span>
                    </div>
                </div>
                <div className="icons">
                    <List/>
                    <Edit/>
                    <DeleteForever />
                </div>
                <div className="alert"></div>
            </article>
            


    );
}

export default Cards;
