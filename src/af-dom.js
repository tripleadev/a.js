import * as snabbdom from 'snabbdom'
import propsModule from 'snabbdom/modules/props'

const reconcile = snabbdom.init([propsModule])

const render = (el, rootDomElement) => {
  reconcile(rootDomElement, el)
}

const AFDom =  {
  render
}

export default AFDom