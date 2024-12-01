package UBS.ideasphere.Repository;
import UBS.ideasphere.Model.Idea;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ideaRepository extends JpaRepository<Idea, Integer> {
    
}

