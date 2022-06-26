const mobilememu = document.getElementbyId('mobilememu')
const menu = document.getElementbyId('menu')
mobilememu.onclick = function(){

	mobilemenu.classlist.toggle('active');
	menu.classlist.toggle('active');
}
