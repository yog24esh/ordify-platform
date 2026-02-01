/**
 * Admin Footer
 *
 * Footer for Admin module pages.
 */
const Footer = () => {
  return (
    <footer className="bg-light text-center text-muted py-3 mt-auto">
      <small>
        © {new Date().getFullYear()} Ordify Admin Panel · Internal Use Only
      </small>
    </footer>
  );
};

export default Footer;
