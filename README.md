# g6-tooltip-plugin

## Usage

```javascript
import Tooltip from 'g6-tooltip-plugin'

const tooltip = new Tooltip({
  content: node => {
    return `<div>${node.name}</div>`;
  },
});

const net = new G6.Net({
  id: 'mountnode',
  height: window.innerHeight,
  fitView: 'autoZoom',
  plugins: [tooltip],
});
```
