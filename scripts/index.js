const websocket_endpoint = "ws://localhost:19906";
var items = document.getElementById("items");
var tools = document.getElementById("tools");

var healthnodetext = document.getElementById("healthnodetext");
var healthfragmenttext = document.getElementById("healthfragmenttext");
var powernodetext = document.getElementById("powernodetext");
var powerfragmenttext = document.getElementById("powerfragmenttext");
var sizenodetext = document.getElementById("sizenodetext");
var rangenodetext = document.getElementById("rangenodetext");

var areaname = document.getElementById("areaname");
var currenthp = document.getElementById("currenthp");
var areaitems = document.getElementById("areaitems");
var areascreens = document.getElementById("areascreens");
var totalitems = document.getElementById("totalitems");
var totalscreens = document.getElementById("totalscreens");
var deathcount = document.getElementById("deathcount");
var bubblecount = document.getElementById("bubblecount");
var brickcount = document.getElementById("brickcount");

window.onload = function () 
{
	const socket = new WebSocket(websocket_endpoint);
	socket.onmessage = event => appendData(JSON.parse(event.data));
};

function appendData(data) 
{
	ClearAll();

	console.log(data);
	data.Items.forEach((item) => {
		if (item.mType == 11) 
		{
			items.innerHTML += `<img class="weapon" src="images/${item.mName}.svg"/>`;
		}
		else if (item.mType == 10 || item.mType == 5) 
		{
			tools.innerHTML += `<img class="tool" src="images/${item.mName}.svg"/>`;
		}
	});

	healthnodetext.innerHTML = `X${data.HealthNodes}`;
	healthfragmenttext.innerHTML = `X${data.HealthNodeFragments}`;
	powernodetext.innerHTML = `X${data.PowerNodes}`;
	powerfragmenttext.innerHTML = `X${data.PowerNodesFragments}`;
	sizenodetext.innerHTML = `X${data.SizeNodes}`;
	rangenodetext.innerHTML = `X${data.RangeNodes}`;

	areaname.innerHTML = `Area Name: ${data.AreaName}`;
	currenthp.innerHTML = `HP: ${data.CurrentHP}/${data.MaxHP}`;
	areaitems.innerHTML = `Area Items: ${data.AreaItemPercent}%`;
	areascreens.innerHTML = `Area Map: ${data.AreaMapPercent}%`;
	totalitems.innerHTML = `Total Items: ${data.TotalItemPercent}%`;
	totalscreens.innerHTML = `Total Map: ${data.TotalMapPercent}%`;
	deathcount.innerHTML = `Deaths: ${data.DeathCount}`;
	bubblecount.innerHTML = `Bubbles Popped: ${data.BubbleCount}`;
	brickcount.innerHTML = `Bricks Broken: ${data.BricksCount}`;
}

function ClearAll() {
	items.innerHTML = ``;
	tools.innerHTML = ``;
	healthnodetext.innerHTML = "X0";
	healthfragmenttext.innerHTML = "X0";
	powernodetext.innerHTML = "X0";
	powerfragmenttext .innerHTML = "X0";
	sizenodetext.innerHTML = "X0";
	rangenodetext.innerHTML = "X0";
	areaname.innerHTML = ``;
	currenthp.innerHTML = ``;
	areaitems.innerHTML = ``;
	areascreens.innerHTML = ``;
	totalitems.innerHTML = ``;
	totalscreens.innerHTML = ``;
	deathcount.innerHTML = ``;
	bubblecount.innerHTML = ``;
	brickcount.innerHTML = ``;
}