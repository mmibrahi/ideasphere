package UBS.ideasphere.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import UBS.ideasphere.Model.UserDetails;

@Repository
public interface UserRepository extends JpaRepository<UserDetails, Integer> {
    UserDetails findByUsername(String username);
}   
