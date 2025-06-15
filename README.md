# To-Do List Full Stack Web Application

This is a full-stack To-Do List application developed with Spring Boot (Java) as the backend and React.js as the frontend. It allows users to manage their daily tasks with a persistent MySQL database.

---

## Backend - Spring Boot

### Technologies Used
- Java
- Spring Boot
- Spring Data JPA
- MySQL
- Maven

### How to Run Backend

1. Make sure MySQL server is running and a database named `todo_db` exists.

2. Update `application.properties` (or use environment variables):
```
spring.datasource.url=jdbc:mysql://localhost:3306/todo_db
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password
spring.jpa.hibernate.ddl-auto=update
```
3. Navigate to the backend directory:
```
cd backend
```
4. Run the backend using Maven:
```
mvn spring-boot:run
```
The backend will start on `http://localhost:8080`
---

## REST API Endpoints

```
GET     /api/todos           -> Get all tasks
POST    /api/todos           -> Add new task
PUT     /api/todos/{id}      -> Update task
DELETE  /api/todos/{id}      -> Delete task
```

---

## Frontend - React.js

### Technologies Used
- React.js
- Axios
- Bootstrap (for styling)

### How to Run Frontend

1. Navigate to the frontend directory:
```
cd frontend
```
2. Install dependencies:
```
npm install
```
3. Start the frontend server:
```
npm start
```
This will open the app at `http://localhost:3000`
---

## Folder Structure

```
project-root/
├── backend/
│   ├── src/
│   └── pom.xml
├── frontend/
│   ├── src/
│   └── package.json
└── README.md
```

---

## Notes

- Ensure backend is running before starting frontend.
- Make sure both backend (`8080`) and frontend (`3000`) are not blocked by firewalls.
- Database connection details should be kept secure.
