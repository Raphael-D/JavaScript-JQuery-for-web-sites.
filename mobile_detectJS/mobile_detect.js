function mobileDetect(_ref) {
  var breakpoint = _ref.breakpoint,
      mobile = _ref.mobile,
      pc = _ref.pc;
  var browseInit = function() {
    return location.reload();
  }
	var getWindowWidth = function() {
		return window.innerWidth;
	}

  if (getWindowWidth() <= breakpoint) {
    mobile();
    window.addEventListener('resize', function() {
      if(getWindowWidth() > breakpoint) {
        browseInit();
      }
    });
  } else {
    pc();
    window.addEventListener('resize', function() {
      if(getWindowWidth() <= breakpoint) {
        browseInit();
      }
    });
  }
}
