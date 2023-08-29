class DataValidator {
    constructor(nextValidator = null) {
      this.nextValidator = nextValidator;
    }
  
    setNextValidator(validator) {
      this.nextValidator = validator;
    }
  
    validate(data) {
      if (this.nextValidator) {
        return this.nextValidator.validate(data);
      }
      return true;
    }
  }
  
  class EmailValidator extends DataValidator {
    validate(data) {
      if (!data.email || !data.email.includes('@')) {
        return false;
      }
      return super.validate(data);
    }
  }
  
  class PasswordValidator extends DataValidator {
    validate(data) {
      if (!data.password || data.password.length < 6) {
        return false;
      }
      return super.validate(data);
    }
  }
  
  class AgeValidator extends DataValidator {
    validate(data) {
      if (!data.age || data.age < 18) {
        return false;
      }
      return super.validate(data);
    }
  }
  
  // Використання
  
  const formData = {
    email: 'user@example.com',
    password: 'securepassword',
    age: 25
  };
  
  const emailValidator = new EmailValidator();
  const passwordValidator = new PasswordValidator();
  const ageValidator = new AgeValidator();
  
  emailValidator.setNextValidator(passwordValidator);
  passwordValidator.setNextValidator(ageValidator);
  
  if (emailValidator.validate(formData)) {
    console.log('Дані валідні');
  } else {
    console.log('Дані невалідні');
  }
  