import * as React from 'react'



function App() {
  // const title = 'React';
  return (
    <div>
      <h1>
        Teste React
      </h1>
      <Procurar />


      <hr />

      <Listar />
    </div>
  );
}
function Procurar() {
  return (
    <div>
      <label htmlFor='procurar'>Procurar</label>
      <input id="procurar" type="text" />
    </div>
  )

}
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
    url: 'https://reactjs.org/ ',
    autor: 'Pedro Muniz Trigo',
    comentarios: 2,
    pontos: 5,
    id: 1,
  },
]

function Listar() {
  return (
    <ul>
      {lista.map(function (item) {
        return (
          <li key={item.id}>
            <span>
              <a href={item.url}>{item.titulo}</a>
            </span>
            <span>{item.autor}</span>
            <span>{item.comentarios}</span>
            <span>{item.pontos}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default App
