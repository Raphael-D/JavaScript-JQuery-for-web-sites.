'use strict';

var getEl = function getEl(name, attr) {
  var checkValue = function checkValue(value) {
    var err_message = function err_message() {
      return console.log(attr, '="', name, '"', '<= Oops!! ', 'This element did not exist, please have to check target element.');
    };

    if (!value) {
      err_message();
      return false;
    } else if (!value[0]) {
      err_message();
      return false;
    } else if (value == undefined) {
      err_message();
      return false;
    } else {
      return value;
    }
  };
  if (attr == 'id' && document.getElementById(name)) {
    return document.getElementById(name);
  } else if (attr == 'class' && document.getElementsByClassName(name)) {
    return checkValue(document.getElementsByClassName(name));
  } else if (attr == 'tag' && document.getElementsByTagName(name)) {
    return checkValue(document.getElementsByTagName(name));
  } else {
    return checkValue(null);
  }
};
function assyOrigin(el) {
  this.setElement = function (_ref) {
    var placeType = _ref.placeType,
        tagName = _ref.tagName,
        valueType = _ref.valueType,
        value = _ref.value,
        content = _ref.content;

    var newElem = document.createElement(tagName);
    value && valueType ? newElem.setAttribute(valueType, value) : false;
    content ? newElem.innerHTML = content : false;
    if (el) {
      if (placeType == 'include') {
        return el.appendChild(newElem);
      } else if (placeType == 'after') {
        return el.parentNode.insertBefore(newElem, el.nextSibling);
      }
    } else {
      return console.log('This element did not exist, please have to check target element.');
    }
  };
  this.debug = function (option) {
    console.log(this, option);
  };
}
var ASSY = function ASSY(name, attr) {
  if (getEl(name, attr)) {
    if (attr == 'class' || attr == 'tag') {
      var results = [];
      for (var i = 0; i < getEl(name, attr).length; i++) {
        results.push(new assyOrigin(getEl(name, attr)[i]));
      }
      return results;
    } else {
      return new assyOrigin(getEl(name, attr));
    }
  }
};