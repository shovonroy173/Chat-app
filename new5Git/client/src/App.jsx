import { useState } from "react";

import Auth from "./components/Auth";
import ChannelContainer from "./components/ChannelContainer";
import ChannelListContainer from "./components/ChannelListContainer";

import "./App.css";
import "stream-chat-react/dist/css/index.css"

import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const apiKey = "b3e2khk7ybv8";
const authToken = cookies.get("token");
const client = StreamChat.getInstance(apiKey);

if (authToken) {
  client.connectUser(
    {
      id: cookies.get("userId"),
      name: cookies.get("username"),
      fullName: cookies.get("fullName"),
      image: cookies.get("avatarURL"),
      hashedPassword: cookies.get("hashedPassword"),
      phoneNumber: cookies.get("phoneNumber"),
    },
    authToken
  );
}

function App() {
  const [createType, setCreateType] = useState("");
  const [isCreating, setIsCreating] = useState("");
  const [isEditing, setIsEditing] = useState("");

  if (!authToken) return <Auth />;
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          setCreateType={setCreateType}
          setIsEditing={setIsEditing}
        />
        <ChannelContainer
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          createType={createType}
        />
      </Chat>
    </div>
  );
}

export default App;
