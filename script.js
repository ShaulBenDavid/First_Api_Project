const results = document.getElementById("results");


async function starWarsResults(value){
	const resp = await fetch(`https://swapi.py4e.com/api/${value}/`);
	const data = await resp.json();
	printData(data, value);
}

function printData(data, value) {
	let outpot = "";
	console.log(data);

	if (value === "films") {
		data.results.forEach(item => {
			outpot += `
				<div class="vectors">
					<h1>Title: ${item.title}</h1>
					<h2>Epidsode: ${item.episode_id}</h2>
					<h3>Director: ${item.director}</h3>
					<h4>Opening crawl: ${item.opening_crawl}</h4>
				</div>
			`
		})
	}
	if (value === "people") {
		data.results.forEach(item => {
			outpot += `
				<div class="vectors">
					<h1>Name: ${item.name}</h1>
					<h2>Height: ${item.height}</h2>
					<h3>Mass: ${item.mass}</h3>
					<h4>Hair: ${item.hair_color}</h4>
				</div>
			`
		})
	}
	if (value === "vehicles") {
		data.results.forEach(item => {
			outpot += `
				<div class="vectors">
					<h1>Name: ${item.name}</h1>
					<h2>Model: ${item.model}</h2>
					<h3>Manufacturer: ${item.manufacturer}</h3>
					<h4>Price: ${item.cost_in_credits}</h4>
				</div>
			`
		})
	}
	results.innerHTML = outpot;

}


// event lisnear 
document.getElementById("buttons").addEventListener("click", e => {
	starWarsResults(e.target.textContent.trim().toLowerCase());
	console.log(e.target);
});