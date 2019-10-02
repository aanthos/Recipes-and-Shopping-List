export class Ingredient {
    // public name: string;
    // public amount: number;

    /**
     * Shortcut: Instead of initializing variables above and then assigning them in the constructor,
     * adding public in front of every parameter in the constructor does it for you.
     */
    constructor(public name: string, public amount:number) {
        // this.name;
        // this.amount = amount;
    }

    
}