window.addEventListener('DOMContentLoaded', function() {
	getEl('click_element', 'class')[0].addEventListener('click', function() {
		ASSY('click_element', 'class')[0].setElement({
			placeType: 'include', // include or after.
			tagName: 'div', // HTML tag name.
			valueType: 'class', // id or class or href or date attribute, etc...
			value: 'additonal_class_name', // value in valueType.
			content: '追加した要素（This is created element.）' // innerHTML/
		});
		for(var i in ASSY('example_element', 'class')) {
			ASSY('example_element', 'class').setElement({
				placeType: 'after',
				tagName: 'li',
				valueType: 'class',
				value: 'example_element__list',
				content: '追加したリスト（There is created elements.）'
			})
		}
		getEl('home-btn', 'class')[0].href = 'index.html';
		var links = getEl('a_link', 'class');
		for(var i in links) {
			if(links[i] == location.href) {
				links[i].classList.add('stay');
			}
		}
	});
});
/////////////////////////////////////////////////////////////////////////////////////
// Bad example
// getEl('hoge', 'class').setElement({.....}) => error;
// Good example
// ASSY('hoge', 'class').setElement({.....}) => create element;
/////////////////////////////////////////////////////////////////////////////////////
// Bad example
// ASSY('hoge', 'class').addEventListener('click', function(){...});
// Good example
// getEl('hoge', 'class').addEventListener('click', function(){...});
///////////////////////////////////////////////////////////////////////////////////// 
