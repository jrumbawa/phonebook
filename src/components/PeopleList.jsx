const PeopleList = ({ persons, filter }) => {
  const filteredPeople = persons.filter(person => person.name.includes(filter))

  return (
    <ul>
    {filteredPeople.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
  </ul>
  )
}

export default PeopleList