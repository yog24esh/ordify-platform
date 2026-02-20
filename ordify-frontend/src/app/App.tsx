import { Toaster } from "react-hot-toast"; // react-hot-toast

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}

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