-- Scenario 3: Send reminders for loans due in the next 30 days
DECLARE
    v_due_date DATE;
BEGIN
    FOR loan IN (
        SELECT CustomerID, LoanID, DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || loan.LoanID ||
                             ' for Customer ID ' || loan.CustomerID ||
                             ' is due on ' || TO_CHAR(loan.DueDate, 'DD-MON-YYYY'));
    END LOOP;
END;
/