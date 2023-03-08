import React, { useState, useEffect } from "react";
import axios from "axios";

const GithubUser = ({ user }) => {
  return (
    <div className="card">
      <div className="image-wrapper">
        {user.avatar_url && (
          <img
            src={
              user.avatar_url ||
              "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
            }
            alt="Dummy"
          />
        )}
      </div>

      <div className="card-content">
        <p>{user.name}</p>
      </div>
    </div>
  );
};

export default GithubUser;
