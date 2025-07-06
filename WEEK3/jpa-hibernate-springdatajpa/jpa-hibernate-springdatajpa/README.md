
# Difference between JPA, Hibernate, and Spring Data JPA

---

## Java Persistence API (JPA)
- JSR 338 Specification for persisting, reading, and managing data from Java objects
- It is only a specification (no implementation)
- Hibernate is one of the popular implementations of JPA

## Hibernate
- A full-fledged ORM tool that implements JPA
- Requires boilerplate code to manage sessions, transactions, etc.

### Hibernate Code Example
```java
public Integer addEmployee(Employee employee){
   Session session = factory.openSession();
   Transaction tx = null;
   Integer employeeID = null;

   try {
      tx = session.beginTransaction();
      employeeID = (Integer) session.save(employee); 
      tx.commit();
   } catch (HibernateException e) {
      if (tx != null) tx.rollback();
      e.printStackTrace(); 
   } finally {
      session.close(); 
   }
   return employeeID;
}
```

## Spring Data JPA
- A layer of abstraction built on top of JPA and its implementation (e.g., Hibernate)
- Minimizes boilerplate code using repositories
- Handles transactions and query generation

### Spring Data JPA Code Example

**EmployeeRepository.java**
```java
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {}
```

**EmployeeService.java**
```java
@Autowired
private EmployeeRepository employeeRepository;

@Transactional
public void addEmployee(Employee employee) {
    employeeRepository.save(employee);
}
```

---

## Summary
| Feature | JPA | Hibernate | Spring Data JPA |
|--------|-----|-----------|-----------------|
| Type | Specification | ORM Implementation | Abstraction |
| Implementation | No | Yes | No |
| Boilerplate Code | Less | More | Minimal |
| Manages Transactions | No | Yes | Yes |
| Repository Support | No | No | Yes |

---

## References:
- https://dzone.com/articles/what-is-the-difference-between-hibernate-and-sprin-1
- https://www.javaworld.com/article/3379043/what-is-jpa-introduction-to-the-java-persistence-api.html
