-- Scenario 1: Process monthly interest for savings accounts
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    FOR acc IN (SELECT AccountID, Balance FROM Accounts WHERE AccountType = 'Savings') LOOP
        UPDATE Accounts
        SET Balance = Balance + (Balance * 0.01)
        WHERE AccountID = acc.AccountID;
    END LOOP;
    COMMIT;
END;
/