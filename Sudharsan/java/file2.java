class BankAccount {


    private double balance;

   
    BankAccount(double balance)
    {
        this.balance = balance;
    }

   
    public void deposit(double amount) 
    {
        if (amount > 0)
        {
            balance = balance + amount;
            System.out.println("Deposited: " + amount);
        } else 
        {
            System.out.println("Invalid deposit amount");
        }
    }

   
    public void withdraw(double amount)
    {
        if (amount > 0 && amount <= balance)
        {
            balance = balance - amount;
            System.out.println("Withdrawn: " + amount);
        }
        else 
        {
            System.out.println("Insufficient balance");
        }
    }

    
    public double getBalance()
    {
        return balance;
    }
}

public class Main {
    public static void main(String[] args) {

        BankAccount account = new BankAccount(5000);

        account.deposit(2000);
        account.withdraw(1000);

        System.out.println("Current Balance: " + account.getBalance());
    }
}
