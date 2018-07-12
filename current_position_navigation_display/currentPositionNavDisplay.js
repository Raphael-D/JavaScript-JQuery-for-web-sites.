function currentPositionNavDisplay(offsetValue) {
  !offsetValue ? offsetValue = 0 : offsetValue;
  var escapeNaN = function(obj) {
		return parseInt(obj);
	}
	var hasHashNavItems = function() {
		var targets = document.getElementsByTagName('a');
		var elems = [];
		for (var i = 0; i < targets.length; i++) {
			if (targets[i].href.indexOf('#') != -1 && targets[i].href.split('#').pop() != '') {
				elems.push(targets[i]);
			}
		}
		return elems;
	}
  var navItems = hasHashNavItems();
	var anchorLinks = function() {
		var links = [];
		var targets = document.getElementsByTagName('a');
		for (var i = 0; i < targets.length; i++) {
			if (targets[i].href.indexOf('#') != -1 && targets[i].href.split('#').pop() != '') {

				links.push(targets[i].href.split('#').pop());
			}
		}
		return links;
	}
	var removeSameId = function() {
		return anchorLinks().filter(function(x, i, self) {
			return self.indexOf(x) === i;
		});
	}
	var getHasHashIdElem = function() {
		var hashItems = [];
		for (var i = 0; i < removeSameId().length; i++) {
			if (removeSameId()[i] != '' && document.getElementById(removeSameId()[i]) != null) {
          hashItems.push(document.getElementById(removeSameId()[i]))
			}
		}
    return hashItems;
	}
	var getHasHashIdElem = getHasHashIdElem();
	var getHasHashIdElemPos = function() {
		var posVals = [];
		for (var i = 0; i < getHasHashIdElem.length; i++) {
			posVals.push(escapeNaN(getHasHashIdElem[i].getBoundingClientRect().top));
		}
		return posVals;
	}
  var getClientVerticalMargin = function(target) {
    return escapeNaN(document.defaultView.getComputedStyle(target, null).marginBottom + document.defaultView.getComputedStyle(target, null).marginTop);
  }
  var getHasHashIdElemHeight = function() {
    var value = [];
    for(var i = 0; i < getHasHashIdElem.length; i++) {
      value.push(escapeNaN(getHasHashIdElem[i].clientHeight) + getClientVerticalMargin(getHasHashIdElem[i]));
    }
    return value;
  }
	var getHasHashIdElemHeight = getHasHashIdElemHeight();
  var visitedPosElementAddClass = function() {
    for (var i = 0; i < getHasHashIdElem.length; i++) {
      if(getHasHashIdElemPos()[i] < offsetValue) {
        navItems[i].classList.contains('stay') ? false : navItems[i].classList.add('stay');
        if(getHasHashIdElemPos()[i] + getHasHashIdElemHeight[i] < offsetValue) {
          navItems[i].classList.contains('stay') ? navItems[i].classList.remove('stay') : false;
        }
      } else {
        navItems[i].classList.contains('stay') ? navItems[i].classList.remove('stay') : false;
      }
		}
  }
	window.addEventListener('scroll', visitedPosElementAddClass);
}
window.addEvnetListener('DOMContentLoaded', currentPositionNavDisplay(100));
