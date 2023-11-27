## Client Dependencies

## Server Dependencies
- Express - фреймворк
- Postgres - СУБД
- Sequelize - ORM для БД
- cors - обращение от браузера к серверу
- dotenv - для инициализации переменных окружения
- nodemon - при каждом изменении кода сервер перезапускается автоматически

backup DB:
/Library/PostgreSQL/15/bin/pg_dump -U postgres -h localhost -p 5433  -d onlineshop -F c -f /Users/Albert/Desktop/programming/onlineShop/server/backup.sql