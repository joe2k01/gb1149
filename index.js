const loadTable = () => {
    const displayTable = document.getElementById("displayTable")

    // Fetch local database
    fetch("database.json")
    .then((res) => res.json())
    .then((database) => {
        const PT401 = database.PT401;

        for(var i = 0; i < PT401.length; i++) {
            let newRow = displayTable.insertRow();

            let nameCell = newRow.insertCell();
            let datasheetCell = newRow.insertCell();

            nameCell.innerHTML = PT401[i].name;
            datasheetCell.innerHTML = `<a href=${PT401[i].datasheet}>link</a>`
        }
    })
    console.log("loaded")
}

window.addEventListener("load", (event) => {
    loadTable();
})