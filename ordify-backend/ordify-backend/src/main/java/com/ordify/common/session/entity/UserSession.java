package com.ordify.common.session.entity;

//import com.ordify.user.entity.User;
import jakarta.persistence.*;
import java.time.LocalDateTime;

/**
 * UserSession
 *
 * Stores session details for a logged-in user.
 * Each session has a unique sessionId (UUID string).
 */
@Entity
@Table(name = "user_session")
public class UserSession {

    @Id
    @Column(name = "session_id", length = 100)
    private String sessionId;

//    @ManyToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "user_id", nullable = false)
//    private User user;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "expires_at")
    private LocalDateTime expiresAt;

    public String getSessionId() {
        return sessionId;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getExpiresAt() {
        return expiresAt;
    }

    public void setExpiresAt(LocalDateTime expiresAt) {
        this.expiresAt = expiresAt;
    }
}
