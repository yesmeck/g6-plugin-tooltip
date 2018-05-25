/**
 * @fileOverview 节点右键工具
 * @author huangtonger@aliyun.com
 */
import { Util } from '@antv/g6';

function NodeTool(cfg) {
  Util.mix(this, cfg);
  this.init();
}

Util.augment(NodeTool, {
  class: 'node-tool',

  lists: [],

  init() {
    const graph = this.graph;
    const graphContainer = graph.get('graphContainer');
    const className = this.class;
    const container = Util.createDOM('<div class="' + className + '"></div>', {
      position: 'absolute',
      visibility: 'hidden',
      'font-size': '14px',
      'line-height': 1.5,
      '-webkit-box-sizing': 'border-box',
      'box-sizing': 'border-box',
      margin: 0,
      padding: 0,
      'list-style': 'none',
      'max-width': '250px',
      'padding': '6px 8px',
      'color': '#fff',
      'text-align': 'left',
      'text-decoration': 'none',
      'background-color': 'rgba(0, 0, 0, 0.75)',
      'border-radius': '4px',
      '-webkit-box-shadow': '0 2px 8px rgba(0, 0, 0, 0.15)',
      'box-shadow': '0 2px 8px rgba(0, 0, 0, 0.15)',
      'min-height': '32px',
    });
    graphContainer.appendChild(container);
    this.container = container;
  },

  show(node, x, y) {
    const container = this.container;
    container.innerHTML = this.content(node._attrs.model);
    container.show();
    container.css({
      top: y + 'px',
      left: x + 'px',
    });
    this.node = node;
  },

  hide() {
    const container = this.container;
    container.hide();
  },

  getNode() {
    return this.node;
  },
});
module.exports = NodeTool;
