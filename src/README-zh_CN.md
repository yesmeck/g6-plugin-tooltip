# 介绍

官方自研的最大生成森林图分析模版，适用于中大规模的图分析。

![image](https://gw.alipayobjects.com/zos/rmsportal/twAWclTGvCufOWnToqlg.gif)

# 使用

```js
/**
 * 保留字段:
 * node.vx, node.vy, node.x, node.y
 * node.to, node.from
 * node.visited, node.edges, node.links
 * edge.isTreeEdge、edge.lineWidth
 * 可配置字段:
 * node.weight 元素权重 必选
 * node.rank   分层权重 可选
 */
const plugin = new G6.Plugins['template.analysis.maxSpanningForest']({
  /**
   * 布局对象 默认是力导布局
   * @type  {Object}
   */
  layout: null,

  /**
   * 布局配置
   * @type  {Object}
   */
  layoutCfg: {},

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

  /**
   * 悬浮高亮
   * @type  {Boolean}
   */
  hoverHighlight: true,

  /**
   * 节点工具配置
   * @type  {Boolean}
   */
  nodeToolCfg: {
    class: 'node-tool',
    lists: [
      {
        html: '显示来源',
        event: 'click',
        callback: 'showSource',
      },
      {
        html: '显示去向',
        event: 'click',
        callback: 'showTargets',
      },
      {
        html: '显示来源与去向',
        event: 'click',
        callback: 'showAll',
      },
    ],
  },
});
const data = {
  nodes: [
    {
      id: 0,
      weight: 42.194703980779714,
      label: 'name0',
    },
    {
      id: 1,
      weight: 72.86640536738712,
      label: 'name1',
    },
    {
      id: 2,
      weight: 82.29983433131834,
      label: 'name2',
    },
    {
      id: 3,
      weight: 23.204885400175424,
      label: 'name3',
    },
    {
      id: 4,
      weight: 100.84964997048472,
      label: 'name4',
    },
    {
      id: 5,
      weight: 72.90971413062293,
      label: 'name5',
    },
    {
      id: 6,
      weight: 15.029159176990348,
      label: 'name6',
    },
    {
      id: 7,
      weight: 24.38308784826313,
      label: 'name7',
    },
    {
      id: 8,
      weight: 78.00164088714241,
      label: 'name8',
    },
    {
      id: 9,
      weight: 53.580641600279954,
      label: 'name9',
    },
  ],
  edges: [
    {
      id: '1-6',
      source: 1,
      target: 6,
      weight: 89.69805016254719,
    },
    {
      id: '5-3',
      source: 5,
      target: 3,
      weight: 86.31397440928264,
    },
    {
      id: '0-5',
      source: 0,
      target: 5,
      weight: 76.94877138495532,
    },
    {
      id: '5-9',
      source: 5,
      target: 9,
      weight: 63.754902669930644,
    },
    {
      id: '2-7',
      source: 2,
      target: 7,
      weight: 4.449707271000913,
    },
    {
      id: '3-4',
      source: 3,
      target: 4,
      weight: 36.97483959651564,
    },
    {
      id: '9-3',
      source: 9,
      target: 3,
      weight: 50.354719513581635,
    },
    {
      id: '6-4',
      source: 6,
      target: 4,
      weight: 10.02660118138856,
    },
    {
      id: '8-3',
      source: 8,
      target: 3,
      weight: 13,
    },
    {
      id: '8-4',
      source: 8,
      target: 4,
      weight: 13,
    },
    {
      id: '2-1',
      source: 2,
      target: 1,
      weight: 13,
    },
    {
      id: '4-5',
      source: 4,
      target: 5,
      weight: 60,
    },
    {
      id: '4-8',
      source: 4,
      target: 8,
      weight: 63,
    },
    {
      id: '8-5',
      source: 8,
      target: 5,
      weight: 13,
    },
    {
      id: '9-2',
      source: 9,
      target: 2,
      weight: 13,
    },
    {
      id: '1-8',
      source: 1,
      target: 8,
      weight: 19.02660118138856,
    },
    {
      id: '4-2',
      source: 4,
      target: 2,
      weight: 50.02660118138856,
    },
  ],
};
const net = new G6.Net({
  id: 'c1',             // dom id
  width: 500,          
  height: 800,
  grid: null,
  plugins: [ plugin ],
});
net.source(data.nodes, data.edges);
net.render();
```