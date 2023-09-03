// Input and Output
const inputField = document.getElementById("input");
const outputDiv = document.getElementById("output");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
    const inputText = inputField.value;
    outputDiv.textContent = `Input: ${inputText}`;
    inputField.value = "";
});

// Cookie Storage and Deletion
const saveCookieButton = document.getElementById("save-cookie");
const deleteCookieButton = document.getElementById("delete-cookie");
const cookieKeyInput = document.getElementById("cookie-key");
const cookieValueInput = document.getElementById("cookie-value");

saveCookieButton.addEventListener("click", () => {
    const key = cookieKeyInput.value;
    const value = cookieValueInput.value;
    document.cookie = `${key}=${value}`;
    alert(`Cookie "${key}" with value "${value}" saved.`);
    updateCookieTable(); // Update the table after saving
});

deleteCookieButton.addEventListener("click", () => {
    const key = cookieKeyInput.value;
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    alert(`Cookie "${key}" deleted.`);
    updateCookieTable(); // Update the table after deletion
});

// Delete All Cookies
document.getElementById("delete-all-cookies").addEventListener("click", () => {
    const cookies = document.cookie.split("; ");

    cookies.forEach((cookie) => {
        const [name, _] = cookie.split("=");
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    });

    alert("All cookies have been deleted.");
    updateCookieTable(); // Update the table after deleting all cookies
});

// Function to update the cookie table
function updateCookieTable() {
    const cookieTable = document.getElementById("cookie-table");
    const tbody = cookieTable.querySelector("tbody");

    // Clear all existing rows in the table
    tbody.innerHTML = "";

    // Split the cookie string into individual cookies
    const cookies = document.cookie.split("; ");

    cookies.forEach((cookie) => {
        const [name, value] = cookie.split("=");
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        const valueCell = document.createElement("td");

        nameCell.textContent = name;
        valueCell.textContent = value;

        row.appendChild(nameCell);
        row.appendChild(valueCell);

        tbody.appendChild(row);
    });
}

// Update the table when the page loads
updateCookieTable();
