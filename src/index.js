/**
 * @fileOverview 图分析模版
 * @author huangtonger@aliyun.com
 * 保留字段:
 * node.vx, node.vy, node.x, node.y
 * node.to, node.from
 * node.visited, node.edges, node.links
 * edge.isTreeEdge、edge.lineWidth
 * 可配置字段:
 * node.rank  分层权重
 * node.label 节点标签
 */
import { Util } from '@ali/g6';
import Base from './base';
import NodeTool from './nodeTool';

const Plugin = function(cfg) {
  Plugin.superclass.constructor.call(this, cfg);
};

Plugin.ATTRS = {
  content: null,

  /**
   * 水平定位偏移
   * @type  {Number}
   */
  dx: 0,

  /**
   * 竖直定位偏移
   * @type  {Number}
   */
  dy: 0,
};

Util.extend(Plugin, Base);

Util.augment(Plugin, {
  init() {
    const graph = this.get('graph');
    graph.on('afterinit', () => {
      nodeTool = new NodeTool(Util.mix({
        graph,
      }, { content }));
      this.set('nodeTool', nodeTool);
      this._clickShowNodeTool();
    });
  },

  _clickShowNodeTool() {
    const graph = this.get('graph');
    const nodeTool = this.get('nodeTool');
    graph.on('itemclick', ev => {
      const item = ev.item;
      if (item.get('type') === 'node') {
        nodeTool.show(item, ev.domX, ev.domY);
      }
    });
    graph.on('mousedown', () => {
      nodeTool.hide();
    });
  },
});

odule.exports = Plugin;
