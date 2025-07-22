import Header from "./components/Header"
import Entry from "./components/Entry"
import "./index.css"
import travelData from "./data"

function App() {
  const travelElements = travelData.map((entry) => {
    return (
      <Entry key={entry.id} {...entry} />
    )
  })
  return (
    <>
      <Header />
      <main className="container">
        {travelElements}
      </main>
    </>
  )
}

export default App;
