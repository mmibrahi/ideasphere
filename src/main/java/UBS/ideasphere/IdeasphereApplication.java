package UBS.ideasphere;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@SpringBootApplication
@ComponentScan(basePackages="UBS.ideasphere.*")
@EnableJpaRepositories("UBS.ideasphere.*")
@EntityScan("UBS.ideasphere.*")
public class IdeasphereApplication {

	public static void main(String[] args) {
		SpringApplication.run(IdeasphereApplication.class, args);
	}

}
