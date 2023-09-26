
// Componente de cabeçalho
function Header() {
  return (
    <header>
      <h1>Meu Site</h1>
      <nav>
        <ul>
          {/* <li>
            <Link to="/">Início</Link>
          </li> */}
          <li>
            <Link to="./about">Acerca</Link>
          </li>
          <li>
            <Link to="./contact">Contacto</Link>
          </li>
          <li>
            <Link to="./services">Serviços</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// // Páginas
// function Home() {
//   return <h2>Página de Início</h2>;
// }

// function About() {
//   return <h2>Página Acerca</h2>;
// }

// function Contact() {
//   return <h2>Página de Contacto</h2>;
// }

// function Services() {
//   return <h2>Página de Serviços</h2>;
// }

// // App
// function App() {
//   useEffect(() => {
//     console.log('Componente montado');
//     return () => {
//       console.log('Componente desmontado');
//     };
//   }, []);

//   return (
//     <Router>
//       <CommonLayout>
//         <Route path="/" exact component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/contact" component={Contact} />
//         <Route path="/services" component={Services} />

//         <HelloWorld />
//         <NameAndAge />
//         <Counter />
//         <TodoList />
//         <ConditionalRender isLoggedIn={true} />
//       </CommonLayout>
//     </Router>
//   );
// }
export default Header;