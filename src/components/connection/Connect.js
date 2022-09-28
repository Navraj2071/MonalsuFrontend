import "./Connection.css";

import React from "react";
import { Button } from "@mui/material";
import Multipiccarousel from "./Multipiccarousel";
import { useContext, useEffect } from "react";
import UserContext from "../../context/user/userContext";

const Walletdownload = () => {
  return (
    <>
      <h3>You need a blockchain wallet to use Monalsu</h3>
      <Button variant="contained">Download Metamask</Button>
      <Button onClick={() => window.open("https://metamask.io")}>
        Learn more
      </Button>
    </>
  );
};
const Walletconnect = () => {
  const user = useContext(UserContext);
  return (
    <>
      <h3>Connect your wallet to use Monalsu</h3>
      <Button variant="contained" onClick={() => user.login()}>
        Connect
      </Button>
    </>
  );
};

const Intro = () => {
  const user = useContext(UserContext);
  useEffect(() => {
    window.addEventListener("scroll", removedownarrow);
    return () => {
      window.removeEventListener("scroll", removedownarrow);
    };
  }, []);

  const removedownarrow = () => {
    console.log("khb");
    if (document.documentElement.scrollTop > 100) {
      document.getElementById("downarrow").style.display = "none";
    } else {
      document.getElementById("downarrow").style.display = "flex";
    }
  };

  return (
    <>
      <div className="landingsectioncontainer">
        <div className="description">
          <h1>Monalsu</h1>
          <h2>Decentralized Classified Section</h2>
          {user.iswalletAvailable ? (
            <>{!user.isConnected && <Walletconnect />}</>
          ) : (
            <Walletdownload />
          )}
        </div>
        <div className="illustration">
          <img
            src="https://bafybeiau52p5tmolbbcvt64ngedrimgdj7dtpcwemo3zskujaxrgkfgc6q.ipfs.w3s.link/DALL%C2%B7E%202022-09-06%2018.54.47%20-%20cool%20rich%20llama%20swimming%20in%20a%20river%20with%20a%20smartphone.png"
            alt="Monalsu"
          />
        </div>
      </div>

      <div className="downarrowcontainer">
        <div className="downarrow" id="downarrow"></div>
      </div>
    </>
  );
};

const Workdesc = () => {
  const imageArray = [
    "https://bafybeifv4lptpf5xkk2tm63vfnadhfryvblk3dgnjduuzvjprldlnkj5ey.ipfs.w3s.link/DALL%C2%B7E%202022-09-06%2018.54.55%20-%20cool%20rich%20llama%20swimming%20in%20a%20river%20with%20a%20smartphone.png",
    "https://bafybeifk4gfk2wgqu37jl3jnuv66upp6hdiyc5ttti3lhdg5zumxcpsmhe.ipfs.w3s.link/DALL%C2%B7E%202022-09-06%2018.54.43%20-%20cool%20rich%20llama%20swimming%20in%20a%20river%20with%20a%20smartphone.png",
    "https://bafybeidmaqoojbia7ujqbli343u7wvlnux2tpt2nidsk46vneqpglsnooe.ipfs.w3s.link/DALL%C2%B7E%202022-09-06%2019.20.41%20-%20cool%20rich%20llama%20and%20monkey%20connecting%20with%20phone%20and%20making%20money%20in%20a%20mountain%20river%20cartoon.png",
    "https://bafybeieul77xnvyyozs5fzgu6zogl765thwssyxzau2xaip7jcrvbpewv4.ipfs.w3s.link/DALL%C2%B7E%202022-09-06%2019.20.37%20-%20cool%20rich%20llama%20and%20monkey%20connecting%20with%20phone%20and%20making%20money%20in%20a%20mountain%20river%20cartoon.png",
    "https://bafybeicmoytg6absxcnaofvbq3f27cejjhvtk26ojnzqrjhaffpjvfpmlm.ipfs.w3s.link/DALL%C2%B7E%202022-09-06%2019.20.29%20-%20cool%20rich%20llama%20and%20monkey%20connecting%20with%20phone%20and%20making%20money%20in%20a%20mountain%20river%20cartoon.png",
  ];
  return (
    <>
      <div className="landingsectioncontainermid">
        <div className="description">
          <h1>Smarter way to work</h1>
          <h3>Create your profile. Find work. Get paid in full.</h3>
          <Button>Learn How</Button>
        </div>
        <Multipiccarousel imageArray={imageArray} />
      </div>
    </>
  );
};
const Hiredesc = () => {
  const imageArray = [
    "https://bafybeigxhimin65qylmbcdmdxzwahc6453xcszvlv4plmnwu2w2h2m4ujy.ipfs.w3s.link/DALL%C2%B7E%202022-09-06%2018.46.27%20-%20monk%20and%20a%20plumber%20happily%20connecting%20over%20phone%20in%20front%20of%20a%20mounain%20river.png",
    "https://bafybeiftr2yy6vlahfiqglevxmrr7rpg5oesn4xaef7flaw2ytknd2ydlu.ipfs.w3s.link/DALL%C2%B7E%202022-09-06%2018.52.38%20-%20beautiful%20women%20laughing%20with%20each%20other%20staring%20at%20camera%20audience%20and%20using%20a%20smart%20phone.png",
    "https://bafybeifmj4yiwpxq3qnsu2hqz75i7decsvm7y23ij3cph2d2geprr6522e.ipfs.dweb.link/DALL%C2%B7E%202022-09-06%2018.53.48%20-%20beautiful%20women%20laughing%20with%20each%20other%20staring%20at%20camera%20audience%20and%20using%20a%20smart%20phone.png",
    "https://bafybeibuohmq2yez7zavudh7wmhns5zb5dlddaltztwecyvd26msbnvywy.ipfs.dweb.link/DALL%C2%B7E%202022-09-06%2018.47.22%20-%20monk%20and%20a%20carpenter%20happily%20connecting%20over%20phone%20in%20front%20of%20a%20mounain%20river.png",
    "https://bafybeiegrc2zlfrrmzv7yhzx66vnw7qmrj5agkxbg2crzbvxr3r2edruxu.ipfs.dweb.link/DALL%C2%B7E%202022-09-06%2018.52.49%20-%20beautiful%20women%20laughing%20with%20each%20other%20staring%20at%20camera%20audience%20and%20using%20a%20smart%20phone.png",
  ];
  return (
    <>
      <div className="landingsectioncontainermid">
        <div className="description">
          <h1>Smarter way to hire</h1>
          <h3>From Mechanic to Web developer, Hire local, Hire smarter.</h3>
          <Button>Learn How</Button>
        </div>
        <Multipiccarousel imageArray={imageArray} />
      </div>
    </>
  );
};

const Outro = () => {
  const user = useContext(UserContext);

  return (
    <>
      <div className="landingsectioncontainer">
        <div className="description">
          <h2>Get Started Now!</h2>
          {user.iswalletAvailable ? (
            <>{!user.isConnected && <Walletconnect />}</>
          ) : (
            <Walletdownload />
          )}
        </div>
        <div className="illustration">
          <img
            src="https://images.pexels.com/photos/1023756/pexels-photo-1023756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Monalsu"
          />
        </div>
      </div>
    </>
  );
};

const Connect = () => {
  return (
    <div className="landingpage">
      <Intro />
      <Workdesc />
      <Hiredesc />
      <Outro />
    </div>
  );
};

export default Connect;
