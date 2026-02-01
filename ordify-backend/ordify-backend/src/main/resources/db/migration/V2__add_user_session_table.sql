CREATE TABLE IF NOT EXISTS user_session (
    session_id VARCHAR(100) PRIMARY KEY,
    user_id BIGINT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP null,

    CONSTRAINT fk_session_user
        FOREIGN KEY (user_id)
        REFERENCES users(user_id)
);