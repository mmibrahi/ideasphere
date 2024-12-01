package UBS.ideasphere.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import UBS.ideasphere.Model.Idea;
import UBS.ideasphere.Repository.ideaRepository;

@Service
public class ideaService {

    @Autowired
    private ideaRepository ideaRepository;

    public List<Idea> getAllIdeas() {
        return ideaRepository.findAll();
    }

    public Optional<Idea> getIdeaById(Integer id) {
        return ideaRepository.findById(id);
    }

    public Idea createIdea(Idea idea) {
        return ideaRepository.save(idea);
    }

    public void deleteIdea(Integer id) {
        ideaRepository.deleteById(id);
    }
}
