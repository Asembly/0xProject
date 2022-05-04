import Post from "./page/elements/post/Post";
import style from "./App.module.css"
import Form from "./page/elements/form/Form";

const post = {
  likes:100,
  text:"Duis aute irure dolor in reprehenderit in volup velit esse cillum dolore eu Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu cillum dolore eu Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu cillum dolore eu Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
  img:"",
  author:{
    avatar:"https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg",
    surName:"Daniil",
    lastName:"Litvinov"
  }
}

function App() {
  return (
    <div className={style.App}>
      <Form/>
    </div>
  );
}
export default App;
