const Persons = ({ persons, search, handleDelete }) => {
  const filteredNames = persons.filter((person) =>
    person.name.toLowerCase().includes(search)
  )

  return (
    <>
      {filteredNames.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}{' '}
          <button onClick={() => handleDelete(person.id)}>delete</button>
        </p>
      ))}
    </>
  )
}

export default Persons
