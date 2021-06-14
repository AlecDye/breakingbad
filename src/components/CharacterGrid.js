import CharacterItem from "./CharacterItem"
import Spinner from "./Spinner"

const CharacterGrid = ({isLoading, items}) => {


  return isLoading ? (<Spinner />) : 
  <section className="card-grid">
    {items.map(item => (
      <CharacterItem key={item.char_id} item={item} />
    ))}
  </section>
}

export default CharacterGrid
