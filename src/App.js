import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [password, setPassword] = useState('')
  const [passwordDirty,setPasswordDirty] = useState(false)
  const [passwordError,setPasswordError] = useState('пароль не может быть пустым')
  const [formValid, setFormValid] = useState(false)
  const blurHandler = (e) =>{
    switch(e.target.name){
      case 'password':
        setPasswordDirty(true)
        break
    }
  }
  useEffect( ()=> {
    if (passwordError) {
      setFormValid(false)
    }
    else{
      setFormValid(true)
    }
  }, [passwordError])
  const passwordHandler = (e) =>{
    setPassword(e.target.value)
    if(e.target.value.length < 5){
      setPasswordError('Пароль не может быть менее 5 символов')
    }
    else{
      setPasswordError('')
    }
  }
  return (
    <div className="App">
      <form>
        <h1>regist page</h1>
        {(passwordError && passwordDirty) && <div style={{color:'red'}}>{passwordError}</div>}
        <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type="text" placeholder='password...'/>
        <button disabled={!formValid} type='submit'>Regist</button>
      </form>
    </div>
  );
}
export default App;