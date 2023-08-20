import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FriendsList from "./components/FriendsList";
import Logo from "./components/Logo";
import FormSplitBill from "./components/FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Ivan",
    image: "https://i.pravatar.cc/85?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Maria",
    image: "https://i.pravatar.cc/85?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Jovan",
    image: "https://i.pravatar.cc/85?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friendFormIsVisible, setFriendFormIsVisible] = useState(false);

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setFriendFormIsVisible(false);
  };

  const handleFriendSelection = (friend) => {
    setSelectedFriend((selectedFriend) =>
      selectedFriend?.id === friend.id ? null : friend
    );
    setFriendFormIsVisible(false);
  };

  const handleRemoveFriend = (id) => {
    setFriends((friends) => friends.filter((friend) => friend.id !== id));
    setSelectedFriend(null);
  };

  const handleSplitBill = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  };

  return (
    <>
      <Logo />
      <main>
        <div className="app">
          <div className="sidebar">
            <FriendsList
              friends={friends}
              onSelection={handleFriendSelection}
              selectedFriend={selectedFriend}
              onRemoveFriend={handleRemoveFriend}
            />
            {friendFormIsVisible && (
              <FormAddFriend onAddFriend={handleAddFriend} />
            )}
            <Button
              onClick={() => setFriendFormIsVisible((isVisible) => !isVisible)}
            >
              {friendFormIsVisible ? "Close" : "Add friend"}
            </Button>
          </div>
          {selectedFriend && (
            <FormSplitBill
              selectedFriend={selectedFriend}
              onSplitBill={handleSplitBill}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
