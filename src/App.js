import React from 'react'; 
import Form from './components/Common/Form'
import { app } from './firebase-config';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [email, setEmail] = useState('');
const [password, setPassword] = useState('')

const handleAction = (id) => {
  console.log(id);
  const authentication = getAuth();
  if (id === 2) {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        console.log(response)
    })
 }
  console.log("done")
}


  return (
    <BrowserRouter>
      <div className="App">
        <>
          <Routes>
            <Route path='/login' element={<Form title="Login" 
            setEmail={setEmail}
            setPassword={setPassword}/>} 
            handleAction={() => handleAction(1)}/>
            <Route path='/register' element={<Form title="Register" 
            setEmail={setEmail}
            setPassword={setPassword}/>} 
            handleAction={() => handleAction(2)}
            />
          </Routes>
        </>
      </div>
    </BrowserRouter>
  );
}

export default App;