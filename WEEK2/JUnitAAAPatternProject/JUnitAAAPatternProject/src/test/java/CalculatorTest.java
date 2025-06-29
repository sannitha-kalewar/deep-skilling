import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class CalculatorTest {
    private Calculator calculator;

    @Before
    public void setUp() {
        // Arrange: Setup before each test
        calculator = new Calculator();
        System.out.println("Setup completed.");
    }

    @After
    public void tearDown() {
        // Cleanup after each test
        calculator = null;
        System.out.println("Teardown completed.");
    }

    @Test
    public void testAddition() {
        // Act: Perform the action
        int result = calculator.add(2, 3);

        // Assert: Verify the result
        assertEquals(5, result);
    }

    @Test
    public void testSubtraction() {
        int result = calculator.subtract(5, 2);
        assertEquals(3, result);
    }
}
