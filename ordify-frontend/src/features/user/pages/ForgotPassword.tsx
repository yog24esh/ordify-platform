// ForgotPasswordPage.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { authApi } from "../api/authApi";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!email) {
      toast.error("Please enter your registered email");
      return;
    }

    try {
      const res = await authApi.forgotPassword({ email });

      if (res.data && res.data.question) {
        setQuestion(res.data.question);
        toast.success("Security question fetched!");
      } else {
        toast.error("No security question found for this email");
      }
    } catch (err: any) {
      console.error(err);
      toast.error(err.response?.data?.message || "Email not found");
    }
  };

  const handleAnswerClick = () => {
    navigate("/reset-password", { state: { email, question } });
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Forgot Password 🔒</h2>
        <p style={styles.subtitle}>Enter your email to reset password</p>

        <input
          type="email"
          placeholder="Registered Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleSubmit} style={styles.button}>
          Get Security Question
        </button>

        {question && (
          <div style={styles.questionBox}>
            <p style={styles.questionLabel}>Security Question:</p>
            <p style={styles.questionText}>{question}</p>
            <button onClick={handleAnswerClick} style={styles.answerButton}>
              Answer Question
            </button>
          </div>
        )}
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
    background: "#185a9d",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
    marginTop: "5px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  questionBox: {
    marginTop: "24px",
    padding: "20px",
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
    marginBottom: "12px",
    color: "#555",
  },
  answerButton: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    background: "#28a745",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
};
