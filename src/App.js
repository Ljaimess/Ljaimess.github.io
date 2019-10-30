import React, { Component } from 'react';
import './App.css';
import TopBar from "./Components/Topbar/topbar";
import Title from "./Components/Title/title"

class App extends Component {
  state = {}

  header = {
    title: "The Adventure of Laurentino",
    subtitle: "A command line quest",
    image: "https://vignette.wikia.nocookie.net/animalcrossing/images/5/5e/Blathers_-_Animal_Crossing_New_Leaf.png/revision/latest?cb=20130807000633"

  }

  render() {
    return (
      <div className="App">
        <TopBar />
        <Title
          title={this.header.title}
          subtitle={this.header.subtitle}
          image={this.header.image}
        />

      </div>
    );
  }
}

export default App;

// props = {
//   title: "The Adventure of Laurentino",
//   subtitle: "A command line adventure"
// }

// function App (props) {
//   return (
//     <div className="App">
//       <TopBar/>
//       <Title
//         {...this.props}

//       />

//     </div>
//   );
// }

// export default App;
