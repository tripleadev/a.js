import { h } from 'snabbdom'

const createElement = (type, props = {}, ...children) => {
  console.log(type, { props }, children)
  return h(type, { props }, children)
};

const AF = {
  createElement
}

export default AF