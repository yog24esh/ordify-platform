package com.ordify.common.session.repository;

import com.ordify.common.session.entity.UserSession;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * UserSessionRepository
 *
 * Provides DB access methods for user_session table.
 */
@Repository
public interface UserSessionRepository extends JpaRepository<UserSession, String> {
}
