#  Customer CRUD App

## Description
A simple full-stack application to manage customer records.  
Users can create, view, update, and delete customers. Data is stored in a MySQL database.

---

## Tech Stack
- Frontend: HTML, JavaScript, Tailwind CSS
- Backend: Java, Spring Boot
- Database: MySQL

---

## Features
- View all customers
- Add new customer
- Update existing customer
- Delete customer
- Input validation (no empty fields, age between 1–110)
- Responsive UI with modern styling

---

## How to Run

### 1. Clone the repository
git clone <your-repo-link>

### 2. Start MySQL
- Create a database named: `customer`

### 3. Run Backend
cd backend  
mvn spring-boot:run

### 4. Run Frontend
- Open `frontend/index.html` in browser

---

## API Endpoints

- GET /api/customers
- POST /api/customers
- PUT /api/customers/{id}
- DELETE /api/customers/{id}

---

## Testing

### Backend API Testing
Tested using Postman:
- All CRUD endpoints working correctly

### Frontend Testing
- Add, update, delete operations work
- Form validation works
- UI interactions function correctly

### Database Testing
- Data persists in MySQL
- Records correctly inserted, updated, and deleted

---

## Reflection

### Familiar
- Java, Spring Boot, REST APIs

### New
- Connecting frontend (JS) with backend APIs
- Styling using Tailwind CSS

### Learned
- End-to-end CRUD flow
- Handling asynchronous operations using fetch API
- Structuring a full-stack project