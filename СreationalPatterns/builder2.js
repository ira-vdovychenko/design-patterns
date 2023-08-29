class UserBuilder {
    constructor() {
        this.user = {};
    }

    withName(name) {
        this.user.name = name;
        return this;
    }

    withAge(age) {
        this.user.age = age;
        return this;
    }

    withEmail(email) {
        this.user.email = email;
        return this;
    }

    build() {
        return this.user;
    }
}

const user = new UserBuilder()
    .withName('John')
    .withAge(30)
    .withEmail('john@example.com')
    .build();

console.log(user); 
