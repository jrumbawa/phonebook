const Persons = ({ persons, search }) => {
  const filteredNames = persons.filter((person) =>
    person.name.toLowerCase().includes(search)
  )

  return (
    <>
      {filteredNames.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </>
  )
}

export default Persons
