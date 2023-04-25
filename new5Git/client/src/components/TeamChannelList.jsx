import React from "react";

import { AddChannel } from "../assets/AddChannel";

const TeamChannelList = ({ children, error = false, loading, type ,isCreating , 
  setIsCreating , 
  setCreateType , 
  setIsEditing , 
  setToggleContainer }) => {
  if (error) {
    return type === "team" ? (
      <div className="team-channel-list">
        <p className="team-channel-list__messege">
          Connection error , please wait a moment and try again
        </p>
      </div>
    ) : null;
  }
  if (loading) {
    return (
      <div className="team-channel-list">
        <p className="team-channel-list__messege loading">
          {type === "team" ? "Channels" : "Messeges"} loading...
        </p>
      </div>
    );
  }
  return (
    <div className="team-channel-list">
      <div className="team-channel-list__header">
        <p className="team-channel-list__header__title">
          {type === "team" ? "Channels" : "Direct Messeges"}
        </p>
        <AddChannel 
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType} 
                    setIsEditing={setIsEditing}
                    type={type === 'team' ? 'team' : 'messaging'}
                    setToggleContainer={setToggleContainer}
                />
      </div>
      {children}
    </div>
  );
};

export default TeamChannelList;
