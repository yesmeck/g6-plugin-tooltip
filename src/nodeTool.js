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
    });
    container.innterHtml = innterHtml;
    this.container = container;
  },

  show(node, x, y) {
    const container = this.container;
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
