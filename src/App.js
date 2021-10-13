import React, {useState}from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { otherClick, clickButton } from './actions';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/Main';


import './components/static/App.css';

function App(props) {
  const [gridClass, setGridClass] = useState('App colum-normal');
  // const { newValue, novo, otherClick, zubu, clickButton } = props;
  //const {novo, setNovo} = useState(props.novo)

  function toColapse(isColapse){
    isColapse? setGridClass('App colum-colapse') : setGridClass('App colum-normal')
  }

  // function mudarValor(v){
  //   console.log(props)
  //   otherClick(v);
  //   clickButton("Primeiro valor", "segundo valor")
  // }

  return (
    <div className={gridClass}>
      {/* <div>
        <h1>{newValue}</h1>
        <h2>{novo}</h2>
        <h2>{zubu}</h2>
        <button onClick={()=>mudarValor('FUNCAO CHANGE VALOR')}>Click</button>
      </div> */}
      
      <Sidebar setGridClassApp={setGridClass} />
      <Main />
    </div>
  );
}


// const mapStateToProps = store => ({
//   newValue: store.clickState.newValue,
//   zubu: store.clickState.zubumafu,
//   novo:store.otherState.otherValue
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ otherClick, clickButton }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
