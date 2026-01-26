package com.ordify.admin.common.session;

//import com.ordify.user.entity.User;
//import com.ordify.user.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * SessionServiceImpl
 *
 * Implements DB-backed session management using user_session table.
 */
@Service
@Transactional
public class SessionServiceImpl implements SessionService {

    private static final int SESSION_EXPIRY_HOURS = 24;

//    private final UserSessionRepository userSessionRepository;
//    private final UserRepository userRepository;

//    public SessionServiceImpl(UserSessionRepository userSessionRepository,
//                              UserRepository userRepository) {
//        this.userSessionRepository = userSessionRepository;
//        this.userRepository = userRepository;
//    }

    // Returns user mapped to the session if valid and not expired
//    @Override
//    public Optional<User> getUserBySessionId(String sessionId) {
//
//        if (sessionId == null || sessionId.isBlank()) {
//            return Optional.empty();
//        }
//
//        Optional<UserSession> sessionOpt = userSessionRepository.findById(sessionId);
//
//        if (sessionOpt.isEmpty()) {
//            return Optional.empty();
//        }
//
//        UserSession session = sessionOpt.get();
//
//        if (session.getExpiresAt() != null && session.getExpiresAt().isBefore(LocalDateTime.now())) {
//            userSessionRepository.delete(session);
//            return Optional.empty();
//        }
//
//        return Optional.ofNullable(session.getUser());
//    }

    // Creates a new session for a given user id
//    @Override
//    public String createSession(Long userId) {

//        User user = userRepository.findById(userId)
//                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

//        if (!user.isActive()) {
//            throw new InvalidOperationException("User is disabled");
//        }

//        String sessionId = UUID.randomUUID().toString();
//        LocalDateTime now = LocalDateTime.now();
//
//        UserSession session = new UserSession();
//        session.setSessionId(sessionId);
////        session.setUser(user);
//        session.setCreatedAt(now);
//        session.setExpiresAt(now.plusHours(SESSION_EXPIRY_HOURS));
//
////        userSessionRepository.save(session);
//
//        return sessionId;
//    }

    // Deletes the session from DB
//    @Override
//    public void invalidateSession(String sessionId) {
//
//        if (sessionId == null || sessionId.isBlank()) {
//            return;
//        }
//
////        userSessionRepository.deleteById(sessionId);
//    }

    // Checks whether session exists and has not expired
//    @Override
//    public boolean isSessionValid(String sessionId) {
//
//        if (sessionId == null || sessionId.isBlank()) {
//            return false;
//        }
//
//        Optional<UserSession> sessionOpt = userSessionRepository.findById(sessionId);

//        if (sessionOpt.isEmpty()) {
//            return false;
//        }
//
//        UserSession session = sessionOpt.get();
//        return session.getExpiresAt() == null || session.getExpiresAt().isAfter(LocalDateTime.now());
//    }
}
