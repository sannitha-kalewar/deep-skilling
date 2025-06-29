-- Scenario 1: Apply 1% discount for customers above 60
BEGIN
    FOR cust IN (SELECT CustomerID, Age, LoanInterestRate FROM Customers) LOOP
        IF cust.Age > 60 THEN
            UPDATE Customers
            SET LoanInterestRate = LoanInterestRate - 1
            WHERE CustomerID = cust.CustomerID;
        END IF;
    END LOOP;
    COMMIT;
END;
/