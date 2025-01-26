class BankAccount {
    private _balance: number;
    private _accountHolder: string;

    public constructor(accountHolder: string) {
        this.accountHolder = accountHolder;
        this._balance = 0;
    }

    public get balance(): number {
        return this._balance;
    }

    public get accountHolder(): string {
        return this._accountHolder;
    }

    public set accountHolder(accountHolder: string) {
        if (accountHolder.length < 3) {
            throw new Error("Account holder name must be at least 3 characters long");
        }
        this._accountHolder = accountHolder;
    }

    public deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("Deposit amount must be greater than 0");
        }
        this._balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this._balance}`);
    }

    public withdraw(amount: number): void {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be greater than 0");
        }
        if (this._balance < amount) {
            throw new Error("Insufficient balance for withdrawal");
        }
        this._balance -= amount;
        console.log(`Withdrew: $${amount}. Remaining balance: $${this._balance}`);
    }
}

// Correct cases
const myAccount = new BankAccount("John");

console.log(myAccount.accountHolder); // "John"
console.log(myAccount.balance);       // 0

myAccount.deposit(100);               // Deposited: $100. New balance: $100
console.log(myAccount.balance);       // 100

myAccount.withdraw(50);               // Withdrew: $50. Remaining balance: $50
console.log(myAccount.balance);       // 50

// Invalid cases
myAccount.accountHolder = "Al";    // Throws Error: "Account holder name must be at least 3 characters long."
myAccount.deposit(-10);            // Throws Error: "Deposit amount must be greater than 0."
myAccount.withdraw(100);           // Throws Error: "Insufficient balance for withdrawal."
