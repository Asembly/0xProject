import Post from "./page/elements/post/Post";
import style from "./App.module.css"
import Form from "./page/elements/form/Form";
import CreaterPost from "./page/elements/CreaterPost/CreaterPost";

const post = {
  likes:"100k",
  text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",img:"",
  author:{
    avatar:"https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg",
    surName:"Daniil",
    lastName:"Litvinov"
  }
}

function App() {
  return (
    <div className={style.App}>
      <div className={style.element}>
          <CreaterPost/>
      </div>
    </div>

  );
}
export default App;
