/**
 * @fileOverview 插件基类
 * @author huangtonger@aliyun.com
 */

import { Util } from '@ali/g6';
const Base = require('@ali/g-base');

const Plugin = function(cfg) {
  Plugin.superclass.constructor.call(this, cfg);
};

Plugin.ATTRS = {

};

Util.extend(Plugin, Base);

Util.augment(Plugin, {
  init() {
  },
});

module.exports = Plugin;
