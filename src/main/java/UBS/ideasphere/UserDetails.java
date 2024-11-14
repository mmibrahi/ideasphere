package UBS.ideasphere;
import javax.persistence.Entity;
import javax.persistence.Id;

import jakarta.persistence.Table;

@Entity
@Table(name = "user_details")
public class UserDetails {
    

    @Id
    private Integer user_id;
    private String username;
    private String password;

    // Constructors, getters, and setters
    public UserDetails() {}

    public UserDetails(int user_id, String username, String password) {
        this.user_id = user_id;
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getUserId() {
        return user_id;
    }

    public void setPassword(Integer user_id) {
        this.user_id = user_id;
    }

}
