import React from "react";

const Friends = ({ friendsInfo }) => {
  //Cuando hacemos un mapeo o sacamos elementos dinamicamente de un array, al primer elemento padre que saquemos del mapeo, en este caso el figure hay que indicarle una key unica para que al renderizar React no se piense que está repitiendo datos
  return (
    <div>
      {friendsInfo.map((friend) => (
        <figure key={JSON.stringify(friend)}>
          <h3>
            {friend.name} - {friend.city} - {friend.age}
          </h3>
        </figure>
      ))}
    </div>
  );
};

export default Friends;
