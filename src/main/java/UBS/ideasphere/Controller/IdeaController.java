package UBS.ideasphere.Controller;
import UBS.ideasphere.Model.Idea;
import UBS.ideasphere.Service.ideaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/ideas")
public class IdeaController {
    @Autowired
    private ideaService ideaService;

    // Endpoint to create a new idea
    @PostMapping
    public ResponseEntity<Idea> createIdea(@RequestBody Idea idea) {
        Idea savedIdea = ideaService.createIdea(idea);
        return ResponseEntity.ok(savedIdea);
    }

    // Endpoint to retrieve all ideas
    @GetMapping
    public ResponseEntity<List<Idea>> getAllIdeas() {
        List<Idea> ideas = ideaService.getAllIdeas();
        return ResponseEntity.ok(ideas);
    }

    // Endpoint to retrieve a single idea by ID
    @GetMapping("/{id}")
    public ResponseEntity<Idea> getIdeaById(@PathVariable Integer id) {
        return ideaService.getIdeaById(id)
            .map(ResponseEntity::ok)  // If the idea is present, return it with HTTP 200
            .orElseGet(() -> ResponseEntity.notFound().build());  // If not found, return HTTP 404
    }
    
    // Endpoint to delete an idea
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteIdea(@PathVariable Integer id) {
        ideaService.deleteIdea(id);
        return ResponseEntity.noContent().build();
    }
}
