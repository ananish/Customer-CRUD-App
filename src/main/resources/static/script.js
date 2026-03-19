const API = "http://localhost:8080/api/customers";

let editId = null;

async function fetchCustomers() {
    const response = await fetch(API);
    const customers = await response.json();

    const tableBody = document.getElementById("customerTableBody");
    tableBody.innerHTML = "";

    customers.forEach((customer) => {
        const row = document.createElement("tr");
        row.className = "border-b transition duration-200 hover:bg-white/30 backdrop-blur-sm";

        row.innerHTML = `
            <td class="p-3">${customer.id}</td>
            <td class="p-3">${customer.name}</td>
            <td class="p-3">${customer.age}</td>
            <td class="p-3">${customer.email}</td>
            <td class="p-3 flex gap-2">
                <button class="edit-btn bg-blue-600/60 text-white px-3 py-1 rounded hover:bg-blue-600">Edit</button>
                <button class="delete-btn bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
            </td>
        `;

        row.querySelector(".edit-btn").addEventListener("click", function () {
            editCustomer(customer.id, customer.name, customer.age, customer.email);
        });

        row.querySelector(".delete-btn").addEventListener("click", function () {
            deleteCustomer(customer.id);
        });

        tableBody.appendChild(row);
    });
}

async function saveCustomer() {
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || age === "" || email === "") {
        alert("All fields are required");
        return;
    }

    if (!/^\d+$/.test(age)) {
        alert("Age must contain numbers only");
        return;
    }

    if (parseInt(age) < 1 || parseInt(age) > 110) {
        alert("Age must be between 1 and 110");
        return;
    }

    const customer = { name, age, email };

    if (editId === null) {
        await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(customer)
        });
    } else {
        await fetch(`${API}/${editId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(customer)
        });
    }

    clearForm();
    fetchCustomers();
}

function editCustomer(id, name, age, email) {
    document.getElementById("name").value = name;
    document.getElementById("age").value = age;
    document.getElementById("email").value = email;
    editId = id;
}

async function deleteCustomer(id) {
    await fetch(`${API}/${id}`, {
        method: "DELETE"
    });
    fetchCustomers();
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    editId = null;
}

fetchCustomers();