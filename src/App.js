import { Badge, Button } from "react-bootstrap";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState('Cüce')
  const [score, setScore] = useState(0)

  useEffect(() => {
    const customInterval = setInterval(() => {
      setText(item => item === "Deve" ? "Cüce" : "Deve")
    }, 2000)

    return () => clearInterval(customInterval)
  }, [])

  const updateScore = (isCorrect) => {
    setScore(prevScore => {
      if (isCorrect) {
        return prevScore + 1;
      } else {
       
        return Math.max(0, prevScore - 1);
      }
    });
  }

  const deveFunct = () => {
    updateScore(text === "Deve");
  }

  const cuceFunct = () => {
    updateScore(text === "Cüce");
  }

  return (
    <>
      <main className="my-3 mb-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="d-flex align-items-center justify-content-center mb-5">
                <Badge bg="secondary">{text}</Badge>
              </h2>
              <div className="butonGroup d-flex align-items-center justify-content-center">
                <Button variant="primary me-1" onClick={deveFunct}>Deve</Button>
                <Button variant="success ms-1" onClick={cuceFunct}>Cüce</Button>
              </div>
              <div className="score">Skor: {score}</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;