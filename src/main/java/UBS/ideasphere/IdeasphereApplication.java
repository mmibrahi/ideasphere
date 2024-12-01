package UBS.ideasphere;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import UBS.ideasphere.Service.DatabaseTestService;

@SpringBootApplication
@EntityScan(basePackages = "UBS.ideasphere.Model")
@EnableJpaRepositories(basePackages = "UBS.ideasphere.Repository")
@ComponentScan(basePackages = "UBS.ideasphere.*")
public class IdeasphereApplication {

	public static void main(String[] args) {
		SpringApplication.run(IdeasphereApplication.class, args);
	}

	@Autowired
    private DatabaseTestService databaseTestService;

	@Bean
    public CommandLineRunner run() {
        return args -> {
            // Test the connection on application startup
            databaseTestService.testConnection();
        };
    }

}
