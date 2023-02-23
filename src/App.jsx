import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const response = {
  data: {
    user: {
      id: 1312312,
      name: "Valeria",
    },
    posts: [
      {
        id: 1423,
        title: "Primer post",
        message: "Este es el mensaje del post 1",
      },
      {
        id: 12342343,
        title: "Segundo post",
        message: "Este es el mensaje del post 2",
      },
      {
        id: 14223123443,
        title: "Primer post",
        message: "Este es el mensaje del post 1",
      },
      {
        id: 1234123132343,
        title: "Segundo post",
        message: "Este es el mensaje del post 2",
      },
    ],
  },
};

function App() {
  const { data } = response;
  return (
    <div className="App">
      <Header user={data.user} />
      <Main>
        <>
          <p>Contenido del main 1</p>
          <p>Contenido del main 1</p>
          <p>Contenido del main 1</p>
          <p>Contenido del main 1</p>
          <p>Contenido del main 1</p>
        </>
      </Main>
      <Main>
        <p>Contenido del main 2</p>
      </Main>
      <Main>
        <p>Contenido del main 3</p>
      </Main>
      <Footer />
    </div>
  );
}
export default App;
