-- Scenario 2: Update employee bonus by department
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(p_dept_id IN NUMBER, p_bonus_percent IN NUMBER) IS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * p_bonus_percent / 100)
    WHERE DepartmentID = p_dept_id;
    COMMIT;
END;
/