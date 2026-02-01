import AppRoutes from "./routes";
import { Toaster } from "react-hot-toast"; // react-hot-toast
export default function App() {
 return (
    <>
      <AppRoutes />

      {/* Toast container for react-hot-toast */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </>
  );
}