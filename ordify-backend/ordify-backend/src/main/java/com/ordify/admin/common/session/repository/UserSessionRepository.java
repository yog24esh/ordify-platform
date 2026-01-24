package com.ordify.admin.common.session.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ordify.admin.common.session.entity.UserSession;

/**
 * UserSessionRepository
 *
 * Provides DB access methods for user_session table.
 */
@Repository
public interface UserSessionRepository extends JpaRepository<UserSession, String> {
	
}
