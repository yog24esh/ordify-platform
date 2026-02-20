import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authApi } from "../api/authApi";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import { setDemoSession } from "../../../services/session";
export default function LoginPage() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

//   const handleLogin = async () => {
//     setError(null);

//     if (!email || !password) {
//       setError("Email and password are required");
//       return;
//     } 

//     try {
//       setLoading(true);
//       const res = await authApi.login({ email, password });
//       console.log("response",res);
//       toast.success("Login Successfull!!!!!!!!!!!!!!!")
//       const token = res.data.token;
//       localStorage.setItem("token", token);
      
// localStorage.setItem("token", res.data.token);
// localStorage.setItem("role", res.data.role);
// localStorage.setItem("userId", String(res.data.userId));

//       // 2️⃣ Fetch logged-in user info
    
//     // ✅ Decode token
//     const decoded: any = jwtDecode(token);
//     console.log("decoded token", decoded);

//     // ⚠️ IMPORTANT: backend must put userId in JWT for this to work
//     const userId = decoded.userId || decoded.id || decoded.subId;

//     if (!userId) {
//       throw new Error("User ID not found in token");
//     }

//     // ✅ Call existing backend route: /users/{id}
//     const meRes = await userApi.getById(userId);

//     console.log("meRes", meRes.data);

//     const role = meRes.data.role;
//     localStorage.setItem("role", role);

//       navigate("/dashboard");
//     } catch (err: any) {
//       setError(
//         err.response?.data?.message ||
//         "Invalid email or password"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

const handleLogin = async () => {
  

  setError(null);

  if (!email || !password) {
    setError("Email and password are required");
    return;
  }

  try {
    setLoading(true);

    const res = await authApi.login({ email, password });
    console.log("response", res);

    toast.success("Login Successful!");

    const { token } = res.data;

    const decoded: any = jwtDecode(token);

    const role = decoded.role;     // or decoded.authorities[0]
    const userId = decoded.sub; 

    console.log("ROLE FROM STORAGE:", localStorage.getItem("role"));

    // Save auth info
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    localStorage.setItem("userId", String(userId));
    setDemoSession();
    // localStorage.setItem("SESSION_ID", sessionId);


    //  Redirect to dashboard (RoleBasedRedirect will handle actual route)
    navigate("/dashboard", { replace: true });

  } catch (err: any) {
    setError(
      err.response?.data?.message || "Invalid email or password"
    );
  } finally {
    setLoading(false);
  }
};
  
return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back 👋</h2>
        <p style={styles.subtitle}>Login to your account</p>

        {error && <p style={styles.error}>{error}</p>}

        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        {/* Forgot Password */}
        <div style={styles.forgotWrap}>
          <Link to="/forgot-password" style={styles.forgotLink}>
            Forgot password?
          </Link>
        </div>

        <button onClick={handleLogin} style={styles.button} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <div style={styles.links}>
          <span>
            Don’t have an account?{" "}
            <Link to="/register" style={styles.link}>
              Register
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
    background: "linear-gradient(135deg, #667eea, #764ba2)",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "380px",
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
  forgotWrap: {
    textAlign: "right",
    marginBottom: "10px",
  },
  forgotLink: {
    fontSize: "13px",
    color: "#667eea",
    textDecoration: "none",
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    background: "#667eea",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
    marginTop: "5px",
  },
  error: {
    color: "red",
    fontSize: "13px",
    marginBottom: "10px",
    textAlign: "center",
  },
  links: {
    marginTop: "15px",
    textAlign: "center",
    fontSize: "14px",
  },
  link: {
    color: "#667eea",
    fontWeight: 600,
    textDecoration: "none",
  },
};
