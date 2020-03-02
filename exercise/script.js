let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

let monthAndYear = document.getElementById("monthAndYear");

showCalendar(currentMonth, currentYear);

function showCalendar(month, year) {
    let firstDay = new Date(year, month).getDay();
    let dayInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body");

    tbl.innerHTML = "";
    monthAndYear.innerHTML = months[month] + " " + year;

    let date = 1;
    for (let i = 0; i < 6; i++) {
        let row = document.createElement('tr');

        for (let j = 0; j < 7; j++) {
            if (date > dayInMonth) {
                break;
            }

            let cell = document.createElement("td");
            let span = document.createElement("button");
            let cellText = document.createTextNode(node);
            date++;

            if (i == 0 && j < firstDay) {
                cellText = document.createTextNode("");
                date--;
            }
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        tbl.appendChild(row);
    }
}

function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}