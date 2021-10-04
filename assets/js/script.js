document.getElementById("calcBtn").addEventListener("click", (e) => {
    e.preventDefault();

    let fname = document.getElementById("fname").value;
    let sname = document.getElementById("sname").value;

    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${fname}&sname=${sname}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "love-calculator.p.rapidapi.com",
		"x-rapidapi-key": "49c86d3675mshd4e5cfee9c6b664p122169jsn0f4cab3f254f"
	}
    })
    .then(response => response.json())
    .then(data => {
        alert(`
        Percentage: ${data.percentage}\n
        Result: ${data.result}
    `)
    })
    .catch(err => {
        console.error(err);
    });
})