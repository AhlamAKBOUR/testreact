import React from 'react';
import Animal from './Animal';
import myAnimals from './Animalslist';
function Animals() {
  return (
    <div>
        {myAnimals.map((list)=>
            <Animal key={list.id}
                    image={list.image}
                    nom={list.nom}
                    espece={list.espece}
                    age={list.age}
                    descr={list.descr} />
        )}
    </div>
  )
}

export default Animals