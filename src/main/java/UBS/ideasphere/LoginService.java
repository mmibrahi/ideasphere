package UBS.ideasphere;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
    @Autowired
    private UserRepository userRepository;

    public boolean validateUser(String username, String password) {
        UserDetails user = userRepository.findByUsername(username);
        return user != null && user.getPassword().equals(password);
    }
}
