var res = {
		bg : "res/background.jpg",
		block : "res/block.png",
		player : "res/player.png",
		succeed : "res/succeed.png",
		failed : "res/failed.png",
		again : "res/replay.png",
		notify : "res/notify.png",
		start : "res/title.png",
		more : "res/more.png",
		arrow : "res/arrow.png"
};

//var res = {
//bg : "res/backgroundx2.jpg",
//block : "res/blockx2.png",
//player : "res/playerx2.png",
//succeed : "res/succeedx2.png",
//failed : "res/failedx2.png",
//again : "res/replayx2.png",
//notify : "res/notifyx2.png",
//start : "res/title.png",
//more : "res/more.png"
//};

var resources = [];
for (var i in res) {
	resources.push(res[i]);
}