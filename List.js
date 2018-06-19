/**
 * 列表的抽象数据类型定义
 * listSize（属性）列表的元素个数
 * pos（属性）列表的当前位置
 * length（方法）返回列表中元素的个数
 * clear（方法）清空列表中的所有元素
 * toString（方法）返回列表的字符串形式
 * getElement（方法）返回当前位置的元素
 * insert（方法）在现有元素后插入新元素
 * append（方法）在列表的末尾添加新元素
 * remove（方法）在列表中删除元素
 * front（方法）将列表的当前位置移动到第一个元素
 * end（方法）将列表的当前位置移动到最后一个元素
 * prev（方法）将当前位置后移一位
 * next（方法）将当前位置前移一位
 * hasNext（方法）判断后一位
 * hasPrev（方法）判断前一位
 * currPos（方法）返回列表的当前位置
 * moveTo（方法）将当前位置移动到指定位置
 */
function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
}

Object.assign(List.prototype, {
  constructor: List,
  append: function (element) {
    this.dataStore[this.listSize++] = element;
  },
  remove: function (element) {
    var index = this.dataStore.indexOf(element);
    if (index > -1) {
      this.dataStore.splice(index, 1);
      this.listSize--;
      return true;
    }
    return false;
  },
  length: function () {
    return this.listSize;
  },
  toString: function () {
    return this.dataStore;
  },
  insert: function (element, after) {
    var insertPos = this.dataStore.indexOf(after);
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element);
      this.listSize++;
      return true;
    }
    return false;
  },
  clear: function () {
    this.dataStore = [];
    this.listSize = this.pos = 0;
  },
  contains: function (element) {
    return this.dataStore.indexOf(element) > -1;
  },
  front: function () {
    this.pos = 0;
  },
  end: function () {
    this.pos = this.listSize - 1;
  },
  prev: function () {
    this.pos--;
  },
  next: function () {
    if (this.pos < this.listSize) {
      this.pos++;
    }
  },
  currPos: function () {
    return this.pos;
  },
  moveTo: function (position) {
    this.pos = position;
  },
  getElement: function () {
    return this.dataStore[this.pos];
  },
  hasNext: function () {
    return this.pos < this.listSize;
  },
  hasPrev: function () {
    return this.pos >= 0;
  }
});