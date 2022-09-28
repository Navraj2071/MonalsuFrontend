import React, { useState, useEffect } from "react";
import UserContext from "./userContext";

import { ethers } from "ethers";

const User = (props) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : null;
  const signer = provider != null ? provider.getSigner() : null;

  const [isConnected, setIsConnected] = useState(false);
  const [userAccount, setUserAccount] = useState("");

  const iswalletAvailable = window.ethereum != null;

  useEffect(() => {
    if (signer != null) {
      signer
        .getAddress()
        .then((res) => {
          setUserAccount(res);
          setIsConnected(true);
        })
        .catch((err) => {
          setIsConnected(false);
        });
    } else {
      setIsConnected(false);
    }
  });

  const login = async () => {
    await provider
      .send("eth_requestAccounts", [])
      .then((res) => {
        setIsConnected(true);
      })
      .catch((err) => {
        setIsConnected(false);
      });

    if (signer != null) {
      await signer
        .getAddress()
        .then((res) => {
          setUserAccount(res);
          setIsConnected(true);
        })
        .catch((err) => {
          setIsConnected(false);
        });
    }
  };

  return (
    <UserContext.Provider
      value={{
        signer,
        provider,
        login,
        iswalletAvailable,
        isConnected,
        userAccount,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default User;
