import Header from './Header';
import Media from './Media';
function Layout(props) {
  const { children } = props;
  return (
    <section>
      <Header />
      <Media />
      <main>{children}</main>
      <footer>Copyright</footer>
    </section>
  );
}

export default Layout;
