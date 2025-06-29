-- Scenario 3: Transfer funds between accounts
CREATE OR REPLACE PROCEDURE TransferFunds(
    p_from_account IN NUMBER,
    p_to_account IN NUMBER,
    p_amount IN NUMBER
) IS
    v_balance NUMBER;
BEGIN
    -- Check source account balance
    SELECT Balance INTO v_balance FROM Accounts WHERE AccountID = p_from_account FOR UPDATE;

    IF v_balance < p_amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance.');
    END IF;

    -- Deduct from source
    UPDATE Accounts SET Balance = Balance - p_amount WHERE AccountID = p_from_account;

    -- Add to destination
    UPDATE Accounts SET Balance = Balance + p_amount WHERE AccountID = p_to_account;

    COMMIT;
END;
/