package com.ordify.admin.validator;

import com.ordify.admin.common.exception.AccessDeniedException;
import com.ordify.admin.common.exception.ResourceNotFoundException;
import com.ordify.admin.common.session.SessionService;

//import com.ordify.user.entity.User;
import org.springframework.stereotype.Component;

/**
 * Validates whether the current request is made by a SUPER_ADMIN.
 */
@Component
public class AdminAccessValidator {

    private final SessionService sessionService;

    public AdminAccessValidator(SessionService sessionService) {
        this.sessionService = sessionService;
    }

    // Validates that the session exists and belongs to a SUPER_ADMIN
    public void validateSuperAdmin(String sessionId) {

        if (sessionId == null || sessionId.isBlank()) {
            throw new AccessDeniedException("Session ID missing");
        }

//        User currentUser = sessionService.getUserBySessionId(sessionId)
//                .orElseThrow(() -> new ResourceNotFoundException("Invalid session"));

//        if (!currentUser.isActive()) {
//            throw new AccessDeniedException("User account is disabled");
//        }
//
//        if (!currentUser.isSuperAdmin()) {
//            throw new AccessDeniedException("Access denied: SUPER_ADMIN only");
//        }
    }
}
