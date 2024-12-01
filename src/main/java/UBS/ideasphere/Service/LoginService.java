package UBS.ideasphere.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import UBS.ideasphere.Model.UserDetails;
import UBS.ideasphere.Repository.UserRepository;

@Service
public class LoginService {
    @Autowired
    private UserRepository userRepository;

    public boolean validateUser(String username, String password) {
        UserDetails user = userRepository.findByUsername(username);
        return user != null && user.getPassword().equals(password);
    }
}
