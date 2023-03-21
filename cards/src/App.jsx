import './App.css'
import 'bulma/css/bulma.css'
import Course from './Course'
import Angular from './images/angular.jpg'
import Bootstrap from './images/bootstrap5.png'
import Csharp from './images/ccsharp.png'
import KompleWeb from './images/kompleweb.jpg'

function App() {

  return (
    <div className="App">
      <section className='hero is-link'>
        <div className="hero-body">
          <p className="title">Kurslarim</p>
        </div>
      </section>
      <section className="section">
      <div className='container'>
        <div className='columns'>
          <div className='column'>
            <Course
              image={Angular}
              title="Angular"
              description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium autem omnis doloribus sapiente voluptatibus culpa voluptates cupiditate nesciunt quos, eaque provident nulla magnam neque saepe aut hic aliquid ipsa."
            />

          </div>
          <div className='column'>
            <Course
              image={Bootstrap}
              title="Bootstrap"
              description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium autem omnis doloribus sapiente voluptatibus culpa voluptates cupiditate nesciunt quos, eaque provident nulla magnam neque saepe aut hic aliquid ipsa."
            />

          </div>

          <div className='column'>
            <Course
              image={Csharp}
              title="Csharp"
              description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium autem omnis doloribus sapiente voluptatibus culpa voluptates cupiditate nesciunt quos, eaque provident nulla magnam neque saepe aut hic aliquid ipsa."
            />

          </div>

          <div className='column'>
            <Course
              image={KompleWeb}
              title="KompleWeb"
              description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium autem omnis doloribus sapiente voluptatibus culpa voluptates cupiditate nesciunt quos, eaque provident nulla magnam neque saepe aut hic aliquid ipsa."
            />

          </div>

        </div>

      </div>

      </section>



    </div>
  )
}

export default App
