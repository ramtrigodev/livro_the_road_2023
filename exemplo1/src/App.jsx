import * as React from 'react'

const lista = [
  {
    titulo: 'React',
    url: 'https://reactjs.org/',
    autor: 'Ramon Trigo',
    comentarios: 3,
    pontos: 4,
    id: 0,
  },
  {
    titulo: 'React Native',
    url: 'https://reactjs.org/',
    autor: 'Pedro Muniz Trigo',
    comentarios: 2,
    pontos: 5,
    id: 1,
  },
]



const bemvindo = {
  saudacao: 'Oi',
  title: 'React',
};

function App() {
 // const title = 'React';
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
