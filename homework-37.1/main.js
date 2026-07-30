"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfile = exports.Calculator = void 0;
exports.createPerson = createPerson;
console.log('#20. TypeScript homework example file');
function createPerson(name, age, isActive) {
    return { name, age, isActive };
}
const newPerson = createPerson('Олександр', 31, false);
console.log(newPerson);
/*
 * #1
 *
 * Задача: Розробити клас `Calculator` з методами `add` і `multiply`, які будуть логувати виклики цих методів за допомогою декоратора `LogMethodCalls`.
 *
 * Мета: Створити клас, що дозволяє виконувати базові арифметичні операції (додавання та множення) та логує деталі їх викликів для подальшого аналізу або дебагінгу.
 *
 * Вимоги до реалізації:
 * 1. Клас `Calculator` має містити метод `add`, який приймає два числа як аргументи та повертає їх суму.
 * 2. Клас `Calculator` має містити метод `multiply`, який приймає два числа як аргументи та повертає результат їх множення.
 * 3. Обидва методи (`add` і `multiply`) мають бути оздоблені декоратором `LogMethodCalls`. Цей декоратор має логувати ім'я викликаного методу та передані йому аргументи.
 * 4. Декоратор `LogMethodCalls` має бути реалізований так, щоб він міг бути застосований до будь-якого методу класу. При виклику методу, оздобленого цим декоратором, має виводитись лог у форматі: `Calling "<ім'я_методу>" with arguments: <аргументи_методу>`.
 * 5. Всі виводи логів мають здійснюватись через `console.log`.
 *
 */
function LogMethodCalls(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Calling "${propertyKey}" with arguments: ${args}`);
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
class Calculator {
    @LogMethodCalls
    add(a, b) {
        return a + b;
    }
    @LogMethodCalls
    multiply(a, b) {
        return a * b;
    }
}
exports.Calculator = Calculator;
const calculator = new Calculator();
//"Calling "add" with arguments: 2, 3"
console.log(calculator.add(2, 3)); // 5
// // "Calling "multiply" with arguments: 3, 4"
console.log(calculator.multiply(3, 4)); // 12
const profile = UserProfile.createProfile('John Doe', 'john@example.com');
console.log(profile); // { "id": "e6uvai5egqd", "name": "John Doe", "email": "john@example.com" }
//# sourceMappingURL=main.js.map