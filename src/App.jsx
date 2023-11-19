import { useState } from "react";
import "./App.css";
function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorDay, setErrorDay] = useState(false);
  const [errorMont, setErrorMont] = useState(false);
  const [errorYear, setErrorYear] = useState(false);
  const [dayOut, setDayOut] = useState("--");
  const [monthOut, setMonthOut] = useState("--");
  const [yearOut, setYearOut] = useState("--");

  const checkData = (dia, mes, ano) => {
    const data = new Date(ano, mes - 1, dia);
    const diaValido = data.getDate() === Number(dia);
    !diaValido ? setErrorDay(true) : setErrorDay(false);
    const mesValido = data.getMonth() + 1 === Number(mes);
    !mesValido ? setErrorMont(true) : setErrorMont(false);
    const anoValido = data.getFullYear() === Number(ano);
    !anoValido ? setErrorYear(true) : setErrorYear(false);
    return diaValido && mesValido && anoValido;
  };

  const verifySubmit = (e) => {
    e.preventDefault();
    const dataValida = checkData(day, month, year);
    if (dataValida) {
      const bithDate = new Date();
      const atualDate = new Date();
      bithDate.setDate(day);
      bithDate.setMonth(month - 1);
      bithDate.setFullYear(year);
      console.log(bithDate)
      console.log(atualDate)
      let dia = Math.floor(((bithDate - atualDate)*-1) / (1000 * 60 * 60 * 24));
      let a = Math.floor(dia / 365);
      dia = dia%365
      let b = Math.floor(dia / 30);
      dia = dia%30
      let c = dia;
      console.log(bithDate - atualDate);
      console.log(b);
      console.log(c);

      setYearOut(`${a}`);
      setMonthOut(`${b}`);
      setDayOut(`${c}`);
    } else {
      console.log("A data é inválida!");
      setIsValid(false);
    }
  };
  return (
    <>
      <header></header>
      <main>
        <form id="date-form" onSubmit={(e) => verifySubmit(e)}>
          <section id="inp">
            <section id="inp-b">
              <label htmlFor="Day">
                <p className={errorDay ? "error-in" : "text"}>Day</p>
                <input
                  className={errorDay ? "inpData error-inp" : "inpData"}
                  maxLength={2}
                  type="text"
                  onChange={(e) => setDay(e.target.value)}
                  name="day"
                  value={day}
                  placeholder="DD"
                  id="day"
                />
                {errorDay ? (
                  <p className="erro" id="erroY">
                    Must be a valid day
                  </p>
                ) : (
                  <p></p>
                )}
              </label>
              <label htmlFor="month">
                <p className={errorMont ? "error-in" : ""}>Month</p>
                <input
                  maxLength={2}
                  className={errorMont ? "inpData error-inp" : "inpData"}
                  type="text"
                  name="month"
                  onChange={(e) => setMonth(e.target.value)}
                  value={month}
                  placeholder="MM"
                  id="mont"
                />
                {errorMont ? (
                  <p className="erro" id="erroY">
                    Must be a valid Month
                  </p>
                ) : (
                  <p></p>
                )}
              </label>
              <label htmlFor="years">
                <p className={errorYear ? "error-in" : ""}>Year</p>
                <input
                  className={errorYear ? "inpData error-inp" : "inpData"}
                  maxLength={4}
                  type="text"
                  onChange={(e) => setYear(e.target.value)}
                  value={year}
                  name="years"
                  placeholder="YYYY"
                  id="year"
                />
                {errorYear ? (
                  <p className="erro">Must be a valid year</p>
                ) : (
                  <p></p>
                )}
              </label>
            </section>
            {isValid ? (
              <p className="erro">Please provide a valid date</p>
              ) : (
              <p></p>
            )}
          </section>
          <section id="sumbit-section">
            <div id="line"></div>
            <button id="submit-inp" type="submit"></button>
          </section>
        </form>
        <section className="result">
          <h1>
            <span>{yearOut}</span>years
          </h1>
          <h1>
            <span>{monthOut}</span>months
          </h1>
          <h1>
            <span>{dayOut}</span>days
          </h1>
        </section>
      </main>
      <footer>
        <div className="attribution">
          Challenge by{" "}
          <a
            rel="noopener noreferrer"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">AllanHanauer</a>.
        </div>
      </footer>
    </>
  );
}

export default App;
