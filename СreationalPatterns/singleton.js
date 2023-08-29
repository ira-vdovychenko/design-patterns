class Database {
    constructor() {
        if (Database.instance) {
            return Database.instance; // Повертаємо існуючий екземпляр, якщо він вже є
        }
        
        this.data = {}; // Поля для бази даних
        Database.instance = this; // Зберігаємо поточний екземпляр
    }
    
    insert(key, value) {
        this.data[key] = value;
    }
    
    get(key) {
        return this.data[key];
    }
}

const db1 = new Database();
db1.insert('name', 'John');

const db2 = new Database();
console.log(db2.get('name')); 
