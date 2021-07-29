import './App.css';
 import { useState } from 'react'
  function App() {
    const [openDiv, setOpenDive ]= useState(false);
const openConfig = (e) => {
  const tableConfig = document.querySelector('.table__config')
  // tableConfig.classList.add('active')
  setOpenDive(!openDiv)
 !openDiv ? tableConfig.classList.add('active'): tableConfig.classList.remove('active')

// if(!openDiv){
//   tableConfig.classList.add('active')
// }
// else{
//   tableConfig.classList.remove('active')
// }
}
return (
    <div className="app"> 
    <div className="contanier">
        <button  className="btn" onClick={openConfig}  >Open Config</button>
        <div className="table__config">

        </div>
        
        
        </div>
    </div>
  );
}

export default App;
