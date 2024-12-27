
async function fetchData() {
    try {
        const response = await fetch("./data.json");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const inputAll = document.querySelectorAll("input");
        const titleAll = document.querySelectorAll("h2");

        inputAll.forEach((input) => {
            if (input.checked) {
                update();
            }
            input.addEventListener("click", () => {
                update();
            })

            function update() {
                titleAll.forEach((title) => {
                    const result = data.find(item => item.title === title.textContent.trim());
                    const current = title.parentElement.querySelector(".current");
                    const previous = title.parentElement.querySelector(".previous");

                    const timeFrame = input.nextElementSibling.textContent.toLocaleLowerCase();
                    current.textContent = result.timeframes[timeFrame].current + "hrs";
                    previous.textContent = `Previous-${result.timeframes[timeFrame].previous}hrs`; 
                })
            }
            
        })
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to load data.");
    }
}

fetchData();