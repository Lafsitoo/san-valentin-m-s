import "./App.css";
import Title from "./assets/title.png";
import Left from "./assets/left.png";
import Right from "./assets/right.png";
import Heart from "./assets/heart.svg";
import GifOne from "./assets/hugs-and-kisses-snoopy.gif";
import GifTwo from "./assets/love-you-sissy.gif";
import GifThree from "./assets/love-you.gif";
import { useState} from "react";
import GifSadOne from "./assets/goal.gif"
import GifSadTwo from "./assets/sorry.gif"
import GifSadThree from "./assets/cat-crying-cat.gif"

function App() {
  const messages = [
    "¿Segura? 😢",
    "¿Por qué dices que no? 💔",
    "Piénsalo bien... 🥺",
    "Me romperás el corazón... 💀",
    "Última oportunidad... 😭",
    "Voy a llorar... 😭💔",
  ];

  const [noText, setNoText] = useState("ÑO 💔");
  const [siText, setSiText] = useState("CHI ❤️");
  const [clickCount, setClickCount] = useState(0);
  const [showNoButton, setShowNoButton] = useState(true);
  const [isSad, setIsSad] = useState(false);

  const handleNoClick = () => {
    if (clickCount < messages.length) {
      setNoText(messages[clickCount]);
      setClickCount(clickCount + 1);
      setIsSad(true);
    } else {
      setShowNoButton(false);
      setSiText("NO TE QUEDA DE OTRA QUE DECIR CHI ❤️");
    }
  };

  const handleSiClick = () => {
    setIsSad(false);
    setSiText("❤️😭✨ YEEIIIIII ✨😭❤️");
  }

  return (
    <>
      <div className="header-container">
        <img src={Left} alt="heart" className="heart-left" />
        <img src={Title} alt="title" id="title-img" />
        <img src={Right} alt="heart" className="heart-right" />
      </div>

      <hr />

      <div className="details-container">
        <span>México-Argentina</span>
        <span>Febrero 14, 2025</span>
      </div>

      <hr />

      <div className="title-container">
        <h1 className="title">QUIERES SER MI</h1>
        <h1 className="title-two">San Valentin?</h1>
      </div>

      <hr className="red" />

      <div className="banner">
        <img src={Heart} alt="heart-white" />
        <span>EDICIÓN ESPECIAL</span>
        <img src={Heart} alt="heart-white" />
      </div>

      <div className="container">
        <img src={isSad ? GifSadTwo :GifOne} alt="gif" className="image-box" />
        <div className="content">
          <h2>¡ERES LA PERSONA INDICADA! ✨</h2>
          <p>
            Se ha descubierto que <span id="red-text">Romeli</span> es la
            persona más especial del universo. Su sonrisa tiene el poder de
            iluminar cualquier día, su ternura derrite corazones y su presencia
            convierte lo cotidiano en algo mágico. Fuentes cercanas confirman
            que su risa es altamente contagiosa y que su amor es el más valioso
            tesoro jamás encontrado. Estudios recientes aseguran que su sola
            existencia hace del mundo un lugar mejor. Este periódico no tiene
            dudas:
          </p>
          <p id="bold-text">¡Eres la persona indicada! ❤️</p>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <h2>Última Hora: Corazón Robado 💘</h2>
          <p>
            Se ha reportado un caso inesperado de robo… ¡de corazón! Según
            testigos, la víctima no mostró resistencia y, de hecho, parece estar
            felizmente enamorado. Se cree que la responsable de este
            &quot;delito&quot; posee una belleza inigualable, una dulzura
            indescriptible y una sonrisa capaz de conquistar el mundo entero.
            Aunque no hay intención de recuperar el corazón perdido, el afectado
            ha declarado públicamente:
          </p>
          <p id="bold-text">
            “Si este es el crimen, que me condenen a amarla por siempre.” ❤️
          </p>
        </div>
        <img src={isSad ? GifSadThree :GifTwo} alt="gif" className="image-box" />
      </div>

      <hr />

      <div className="te-amo-container">
        <div className="te-amo-box">
          <div className="te-amo-inner-box">TE AMO</div>
        </div>
        <div className="te-amo-quote">
          Cada palabra, cada gesto, es mi manera de decirte que mi corazón
          siempre será tuyo
        </div>
      </div>

      <hr />

      <h1 className="declaration">Declaración Oficial de Amor</h1>
      <div className="banner">
        <span className="question">¿Quieres ser mi San Valentín?</span>
      </div>
      <hr className="red" />

      <div className="buttons-container">
      <button className="chi-button" onClick={handleSiClick}>{siText}</button>
      {showNoButton && (
        <button className="no-button" onClick={handleNoClick}>{noText}</button>
      )}
    </div>

      <hr />

      <div className="container-note">
      <img src={isSad ? GifSadOne : GifThree} alt="gif" className="image-box" />
        <div className="content-note">
          <h2>Nota Especial – Carta de Amor 💌</h2>
          <p>
            Desde el primer momento en que interractuamos, supe que mi vida no
            volvería a ser la misma. No hay palabras suficientes para describir
            lo que siento por ti, pero aquí está mi intento: eres mi luz, mi
            refugio, eres mi mundo y mi razón para sonreír. Cada día contigo es
            una página dorada en mi historia, y solo quiero seguir escribiendo
            contigo.
          </p>
          <p id="grand-text">te amo muuusho</p>
        </div>
      </div>

      <hr />

      <h3>❤️ R&A - I will love you forever ❤️</h3>
      <div className="banner">
        <span className="footer-text">
          Detallito humilde creado con musho amor por Ari, para su persona
          especial y que ama con todo su corazón. Si lees esto <span>¿Quieres casarte
          conmigo?
        </span></span>
      </div>

      <br />
    </>
  );
}

export default App;
