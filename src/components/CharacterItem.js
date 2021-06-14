const CharacterItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card__inner">
        <div className="card-front">
          <img src={item.img} alt={`${item.name}'s mugshot`} />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
        <ul>
          <li>
            <p><strong>Played by:</strong> {item.portrayed}</p>
          </li>
          <li>
            <p><strong>Alias:</strong> {item.nickname}</p>
          </li>
          <li>
            <p><strong>Occupation:</strong> {item.occupation[0]}</p>
          </li>
          <li>
            <p><strong>Well-being:</strong> {item.status}</p>
          </li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
