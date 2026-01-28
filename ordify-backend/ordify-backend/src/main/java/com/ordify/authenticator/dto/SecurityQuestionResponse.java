package com.ordify.authenticator.dto;

public class SecurityQuestionResponse {

    private String email;
    private String question;

    public SecurityQuestionResponse(String email, String question) {
        this.email = email;
        this.question = question;
    }

    public String getEmail() { return email; }
    public String getQuestion() { return question; }
}
