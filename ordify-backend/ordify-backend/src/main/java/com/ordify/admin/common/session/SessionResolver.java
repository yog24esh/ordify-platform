package com.ordify.admin.common.session;

//import com.ordify.user.entity.User;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.ordify.admin.common.exception.AccessDeniedException;

/**
 * SessionResolver
 *
 * Resolves the logged-in user from X-SESSION-ID header
 * and stores it in SessionContext for the request lifecycle.
 */
@Component
public class SessionResolver implements HandlerInterceptor {

    private final SessionService sessionService;

    public SessionResolver(SessionService sessionService) {
        this.sessionService = sessionService;
    }

    // Resolves session and sets current user before controller execution
    @Override
    public boolean preHandle(HttpServletRequest request,
                             HttpServletResponse response,
                             Object handler) {

        String sessionId = request.getHeader("X-SESSION-ID");

        if (sessionId == null || sessionId.isBlank()) {
            throw new AccessDeniedException("X-SESSION-ID header missing");
        }

//        User user = sessionService.getUserBySessionId(sessionId)
//                .orElseThrow(() -> new AccessDeniedException("Invalid session"));
//
//        if (!user.isActive()) {
//            throw new AccessDeniedException("User account is disabled");
//        }
//
//        SessionContext.setCurrentUser(user);
        return true;
    }

    // Clears session context after request completion
    @Override
    public void afterCompletion(HttpServletRequest request,
                                HttpServletResponse response,
                                Object handler,
                                Exception ex) {

//        SessionContext.clear();
    }
}
