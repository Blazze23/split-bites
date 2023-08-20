/* eslint-disable react/prop-types */
import Button from "./Button";

function Friend({ friend, onSelection, selectedFriend, onRemoveFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  const { name, image, balance } = friend;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={image} alt={name} />
      <h3>{name}</h3>

      {balance < 0 && (
        <p className="red">
          You owe {name} ${Math.abs(balance)}
        </p>
      )}
      {balance > 0 && (
        <p className="green">
          {name} owes you ${Math.abs(balance)}
        </p>
      )}
      {balance === 0 && <p className="even">You and {name} are even</p>}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
      <Button style="remove" onClick={() => onRemoveFriend(friend.id)}>
        Remove
      </Button>
    </li>
  );
}

export default Friend;
