package UBS.ideasphere.Model;

import org.springframework.boot.autoconfigure.domain.EntityScan;

import jakarta.persistence.Table;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
@EntityScan(basePackages = "UBS.ideasphere.Model")
@Table(name = "ideas")
public class Idea {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  //generates unique ID
    private Integer id;

    private String title;
    private String tagname;
    private String content;

    // Constructors, getters, and setters
    public Idea() {}

    public Idea(String title, String tagname,String content) {
        this.title = title;
        this.tagname = tagname;
        this.content = content;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String gettitle() {
        return title;
    }

    public void settitle(String title) {
        this.title = title;
    }

    public String gettagname() {
        return tagname;
    }

    public void settagname(String tagname) {
        this.tagname = tagname;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}

