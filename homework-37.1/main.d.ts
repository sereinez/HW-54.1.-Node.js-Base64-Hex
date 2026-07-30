interface PersonInterface {
    name: string;
    age: number;
    isActive: boolean;
}
declare function createPerson(name: string, age: number, isActive: boolean): PersonInterface;
declare class Calculator {
    add(a: number, b: number): number;
    multiply(a: number, b: number): number;
}
declare namespace UserProfile {
}
export { createPerson, Calculator, UserProfile };
//# sourceMappingURL=main.d.ts.map