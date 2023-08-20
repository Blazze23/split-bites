/* eslint-disable react/prop-types */
import Friend from "./Friend";

function FriendsList({ friends, onSelection, selectedFriend, onRemoveFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
          onRemoveFriend={onRemoveFriend}
        />
      ))}
    </ul>
  );
}

export default FriendsList;
