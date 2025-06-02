import './App.css'
import './App-reset.css'
import { Article } from './components/exercise-article/article.jsx'
import { ExerciseTitle } from './components/exercise-title/exercise-title.jsx'
import { Button } from './components/button/button.jsx'
import { Paragraph } from './components/paragraph/paragraph.jsx'

function App() {
  return (
    <>
      <h1>Quest React Base</h1>
      <div className="exercises">
        <Article>
          <ExerciseTitle title="Exercício 1"/>
          <Paragraph textColor={'red'}/>
        </Article>

        <Article>
          <ExerciseTitle title="Exercício 2"/>
          <Button label="Baixar arquivo"/>
        </Article>

      </div>
    </>
  )
}

export default App