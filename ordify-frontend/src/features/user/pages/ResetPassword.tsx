// ResetPasswordPage.tsx
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { authApi } from "../api/authApi";

export default function ResetPasswordPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email || "";
  const question = location.state?.question || "";

  const [securityAnswer, setSecurityAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleReset = async () => {
    if (!securityAnswer || !newPassword || !confirmPassword) {
      toast.error("All fields are required");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      await authApi.resetPassword({
        email,
        securityAnswer,
        newPassword,
      });
      toast.success("Password reset successfully!");
      navigate("/login"); // redirect to login page
    } catch (err: any) {
      console.error(err);
      toast.error(err.response?.data?.message || "Security answer is incorrect");
    }
  };

  if (!email || !question) {
    return (
      <div style={styles.page}>
        <div style={styles.card}>
          <p style={styles.errorText}>
            No email or security question found. Please go back and request reset.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Reset Password 🔑</h2>
        <p style={styles.subtitle}>Reset password for: {email}</p>

        {/* Security Question Block */}
        <div style={styles.questionBox}>
          <p style={styles.questionLabel}>Security Question:</p>
          <p style={styles.questionText}>{question}</p>
        </div>

        {/* Security Answer Block */}
        <div style={styles.answerBox}>
          <label style={styles.answerLabel}>Your Answer:</label>
          <input
            type="text"
            value={securityAnswer}
            onChange={(e) => setSecurityAnswer(e.target.value)}
            style={styles.input}
          />
        </div>

        {/* Password Inputs */}
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleReset} style={styles.button}>
          Reset Password
        </button>
      </div>
    </div>
  );
}

/* Inline CSS */
const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #43cea2, #185a9d)",
    padding: "20px",
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "16px",
    width: "100%",
    maxWidth: "420px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
    position: "relative",
  },
  title: {
    textAlign: "center",
    marginBottom: "5px",
    fontSize: "28px",
    fontWeight: 700,
    color: "#185a9d",
  },
  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: "20px",
    fontSize: "14px",
  },
  questionBox: {
    marginBottom: "20px",
    padding: "16px",
    borderRadius: "12px",
    background: "#f0f8ff",
    borderLeft: "4px solid #185a9d",
    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)",
  },
  questionLabel: {
    fontWeight: 600,
    marginBottom: "6px",
    color: "#333",
  },
  questionText: {
    fontStyle: "italic",
    color: "#555",
  },
  answerBox: {
    marginBottom: "20px",
    padding: "16px",
    borderRadius: "12px",
    background: "#fffbe6",
    border: "1px solid #f0d67b",
    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)",
  },
  answerLabel: {
    display: "block",
    marginBottom: "6px",
    fontWeight: 600,
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "#28a745",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  errorText: {
    color: "red",
    fontWeight: 600,
    textAlign: "center",
  },
};
