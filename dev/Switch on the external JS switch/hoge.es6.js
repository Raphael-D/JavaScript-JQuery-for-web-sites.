(() => {
  var loadScript = (url, callback) => {
    var path = 'js/';
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = path + url;
    script.addEventListener('load', callback);
    document.getElementsByTagName('head')[0].appendChild(script);
  }
  loadScript('module.js', function() {
    var a = Options().a,
        span = Options().span,
        div = Options().div,
        section = Options().section;
    	a ? (() => {
        console.log('a', a);
        const a_elem = document.getElementsByTagName('a');
        for(let i in a_elem) {
          console.log(a_elem[i]);
        }
      })() : console.log('a', 'off');

      span ? (() => {
        console.log('span', span);
        const span_elem = document.getElementsByTagName('span');
        for(let i in span_elem) {
          console.log(span_elem[i]);
        }
      })() : console.log('span', 'off');

      div ? (() => {
        console.log('div', div);
        const div_elem = document.getElementsByTagName('div');
        for(let i in div_elem) {
          console.log(div_elem[i]);
        }
      })() : console.log('div', 'off');
      section ? (() => {
        console.log('section', section);
        const section_elem = document.getElementsByTagName('section'),
        sectionko = document.getElementsByTagName('br'),
        section_o = document.getElementsByTagName('header'),
        section_main = document.getElementsByTagName('main');
        for(let i in section_elem) {
          console.log(section_elem[i]);
        }
      })() : console.log('section', 'off');
  });
})();
