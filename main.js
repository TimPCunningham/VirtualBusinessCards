const tabs = [
	{
		name: 'Card 1',
		file: 'opt1.html',
		css: 'opt1.css'
	},
	{
		name: 'Card 2',
		file: 'opt2.html',
		css: 'opt2.css'
	},
	{
		name: 'Card 3',
		file: 'opt3.html',
		css: 'opt3.css'
	},
	{
		name: 'Card 4',
		file: 'opt4.html',
		css: 'opt4.css'
	},
	{
		name: 'Card 5',
		file: 'opt5.html',
		css: 'opt5.css'
	}
];

const fragmentFolder = './fragments/';
const cssFolder = './css/';

function setFragment(index) {
	const fragment = tabs[index];
	const path = fragmentFolder + fragment.file;
	const contentArea = document.querySelector('.content');
	fetch(path)
		.then(res => res.text())
		.then(data => {
			contentArea.innerHTML = data;
			setCss(index);
		});
}

function setCss(index) {
	const fragment = tabs[index];
	const cssLink = document.querySelector('#currentStyle');
	const cssPath = cssFolder + fragment.css;

	cssLink.setAttribute('href', cssPath);
}

function createTabs() {
	const tabsArea = document.querySelector('.tabs');
	let tabHTML = '';
	for (let index = 0; index < tabs.length; index++) {
		const tab = tabs[index];
		tabHTML += `<a class='tab-link' onClick="setFragment(${index})">${tab.name}</a>`
	}
	tabsArea.innerHTML = tabHTML;
}

createTabs();
