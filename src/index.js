import { Util } from '@antv/g6';
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
    console.log('tooltip init');
    graph.on('afterinit', () => {
      console.log('afterinit');
      const nodeTool = new NodeTool(Util.mix({
        graph,
      }, { content: this.get('content') }));
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

module.exports = Plugin;
