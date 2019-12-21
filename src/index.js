import AF from "./af"
import AFDom from './af-dom'

const App = (
  <div>
    <h1 className="primary">A.JS</h1>
    <p>It is first ever page created in A.JS framework</p>
  </div>
)

AFDom.render(App, document.getElementById('root'));