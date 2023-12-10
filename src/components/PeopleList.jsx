import Person from './Person'

const PeopleList = ({ persons, filter, deletePerson }) => {
  const filteredPeople = persons.filter(person => person.name.includes(filter))

  return (
    <ul>
      {filteredPeople.map(person => 
        <Person 
          person={person} 
          key={person.id} 
          deletePerson={() => deletePerson(person.id, person.name)}
        />
      )}
    </ul>
  )
}

export default PeopleList