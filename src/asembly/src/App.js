import Post from "./page/elements/post/Post";

const post = {
  likes:100,
  text:"hello everyone",
  author:{
    avatar:"https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg",
    surName:"Daniil",
    lastName:"Litvinov"
  }
}

function App() {
  return (
    <div className="App">
        <Post text={post.text} avatar={post.author.avatar} likes={post.likes}/>
    </div>
  );
}
export default App;
