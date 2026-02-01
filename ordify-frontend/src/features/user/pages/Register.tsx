import { useState } from "react";
import { authApi } from "../api/authApi";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    securityQuestion: "",
    securityAnswer: "",
    role: "CUSTOMER",
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    if (!form.name || !form.email || !form.password) {
      toast.error("Name, Email and Password are required");
      return;
    }

    try {
      await authApi.register(form);
      toast.success("Registered successfully 🎉");
      navigate("/"); // go to login
    }catch (err: any) {
  console.log("Error data:", err.response?.data);

  const errors = err.response?.data;

  if (errors && typeof errors === "object") {
    Object.values(errors).forEach((msg) => {
      toast.error(String(msg));
    });
  } else if (typeof err.response?.data === "string") {
    toast.error(err.response.data);
  } else {
    toast.error("Registration failed");
  }
}

  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account 🚀</h2>
        <p style={styles.subtitle}>Join Ordify to get started</p>

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="password"
          type="password"
          placeholder="Password (min 6 chars)"
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="securityQuestion"
          placeholder="Security Question"
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="securityAnswer"
          placeholder="Security Answer"
          onChange={handleChange}
          style={styles.input}
        />

        <select name="role" onChange={handleChange} style={styles.select}>
          <option value="CUSTOMER">Customer</option>
          <option value="DELIVERY_PARTNER">Delivery Partner</option>
          <option value="STORE_ADMIN">Store Admin</option>
        </select>

        <button onClick={handleRegister} style={styles.button}>
          Register
        </button>

        <div style={styles.links}>
          <span>
            Already have an account?{" "}
            <Link to="/" style={styles.link}>
              Login
            </Link>
          </span>
        </div>
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
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "420px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  },
  title: {
    textAlign: "center",
    marginBottom: "5px",
  },
  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: "20px",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  select: {
    width: "100%",
    padding: "10px 12px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    background: "#fff",
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    background: "#185a9d",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
    marginTop: "5px",
  },
  links: {
    marginTop: "15px",
    textAlign: "center",
    fontSize: "14px",
  },
  link: {
    color: "#185a9d",
    fontWeight: 600,
    textDecoration: "none",
  },
};
