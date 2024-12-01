package UBS.ideasphere.Service;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DatabaseTestService {

    @Autowired
    private DataSource dataSource;

    public void testConnection() {
        try (Connection connection = dataSource.getConnection()) {
            if (connection != null) {
                System.out.println("Successfully connected to PostgreSQL database!");
            }
        } catch (SQLException e) {
            System.out.println("Failed to connect to PostgreSQL database: " + e.getMessage());
        }
    }
}
