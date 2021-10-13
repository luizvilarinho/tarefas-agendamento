import React, { useState }from 'react';
import AddTarefas from './AddTarefas';
import Listas from './Listas';

import { Reorder } from '@material-ui/icons';
import '.././static/Sidebar.css';


function Sidebar(props){

    const [colapse, setColapse] = useState('Sidebar');

    function toggleColapse(){
        let mainClass = colapse;
        if(mainClass === 'Sidebar'){
            mainClass = 'Sidebar colapse';
            props.setGridClassApp('App colum-colapse')
        }else{
            mainClass = 'Sidebar';
            props.setGridClassApp('App colum-normal')
        } 
        
        setColapse(mainClass);
    }

    return(
        <aside className={colapse}>
            <nav>
            <i onClick={()=>toggleColapse()}>
                <Reorder />
            </i>
                <div className="container container-off">
                    <AddTarefas />
                    <Listas/>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar;