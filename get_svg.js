const { createElement } = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { Flower2 } = require('lucide-react');

const svg = renderToStaticMarkup(createElement(Flower2, { color: '#ec4899', strokeWidth: 2.5, size: 32 }));
console.log(svg);
