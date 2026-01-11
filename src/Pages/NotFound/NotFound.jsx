import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main style={{ padding: "100px", textAlign: "center" }}>
        <h1>404 – Page Not Found</h1>
        <p>The page you’re looking for doesn’t exist.</p>
        <a href="/">Go back home</a>
      </main>
      <Footer />
    </>
  );
}
