import * as React from 'react'

const bemvindo = {
  saudacao: 'Oi',
  title: 'React',
};

function App() {
  const title = 'React';
  return (
    <div>
      <h1>

          {bemvindo.saudacao}
          {bemvindo.title}
      </h1>

      <label htmlFor='procurar'>Procurar</label>
      <input id="procurar" type="text"/>

    </div>


  );
}


export default App
