import {actualDate} from './actualdate.js';
import {checkTags} from './check-tags.js';

export function saveComment(allComments){
	let id = allComments.length;
	const author = document.querySelector('.author-field');
	const text = document.querySelector('.text-field');
	checkTags(author);
	checkTags(text);
	const date = actualDate();
	allComments.push({
		id: id,
		author: author.value,
		text: text.value,
		date: date
	});
	author.value = "";
	text.value = "";
	let coms = JSON.stringify(allComments);
	localStorage.setItem('comments', coms);
	console.log(id);
}
