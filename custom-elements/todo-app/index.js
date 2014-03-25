
(function (root) {
	'use strict';

	var App = root.App = root.App || {
		list: {
			Items: []
		}
	};

	var tdinput = document.querySelector('#new-todo'),
		tdtodos = document.querySelector('#todos');


	Object.observe(App.list.Items, function (recs) {
		var i,
			rec,
			idx;
		for (i=0; rec = recs[i]; i++) {
			if (!isNaN(idx = parseInt(rec.name))) {
				switch (rec.type) {
					case 'add':
						var tditem = document.createElement('td-item');
						tditem.item = rec.object[idx];
						tdtodos.appendChild(tditem);
						break;
					case 'delete':
						console.log('delete <td-item>')
						break;
					default:
						break;
				}
			}
		}
	}, ['add', 'delete']);


	tdinput.addEventListener('td-input-commit', function () {
		if (tdinput.value) {
			App.list.Items.push({
				title: tdinput.value,
				completed: false
			});
			tdinput.value = '';
		}
	});
	tdinput.addEventListener('td-input-cancel', function () {
		tdinput.value = '';
	});

	tdinput.focus();

})(this);