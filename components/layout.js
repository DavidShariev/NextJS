export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <footer>
        <h2>It's footer in layout</h2>
      </footer>
    </>
  );
}
