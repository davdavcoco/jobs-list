## Getting Started

Install all packages

```bash
npm i express
npm i mysql
```

Export db file in phpmyadmin : filename('jobs.sql')

First, run the development server:

```bash
nodemon index
```

Second, run Postman to API testing with the parameter :

POST /tugas

GET /tugas

GET /tasks/{id}

PATCH /tasks/{id}

DELETE /tasks/{id}
