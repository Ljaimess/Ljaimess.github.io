
const MenuContainer = props => <div className="menu" {...props}></div>

class MenuSelect extends React.Component {
  
  constructor(props) {
    super(props)
    this.itemRefs = []
    this.state = {
      selected: this.props.selected || 0,
      handTop: 0,
      handLeft: 0
    }
    
    console.log(this)

    this.onKeyDown = this.onKeyDown.bind(this)
    
  }
  
  
  
  componentDidMount() {
    
    let selectedElement = this.itemRefs[this.state.selected]

    this.setState({      
      handTop: selectedElement.offsetTop
    })
    
    window.addEventListener('keydown', this.onKeyDown)
    
  }
  
  componentWillUnmount() {
    
    window.removeEventListener('keydown', this.onKeyDown)
    
  }
  
  
  
  onKeyDown(e) {
    
    if (!this.props.active) {
      console.log("props.active line 46" + this )
      return
    }
    
    let point = true
        
    if (e.keyCode == '40') {      
      point = true
    } else if (e.keyCode == '38') {      
      point = false
    } else if ( (e.keyCode == '13') || (e.keyCode == '32') ) {
      if (this.props.onChoice) { 
        this.props.onChoice(this.state.selected)
      }
      return
    } else {      
      return
    }
    
    this.setState(state => {
      let selected = point ?
          (state.selected + 1) % this.props.items.length :
          (state.selected == 0 ?
            (this.props.items.length - 1) : ((state.selected - 1) % this.props.items.length) )

      let handTop =  this.itemRefs[selected].offsetTop
      
      return { selected, handTop }         
     })
    
    e.preventDefault()
  }
    
  render() {
    return (
        <MenuContainer           
          style={{...this.props.style, paddingLeft: '44px'}}>
        {
          this.props.items.map( (item, index) => 
            <div 
              className="menu_item_wrapper" 
              style={this.props.itemStyle}              
              ref={e => this.itemRefs[index] = e}
              key={index}>
             { this.props.renderItem(item, index) }
            </div>
          )
        }
        {
          this.props.active ?
          <div className="menu_hand" style={{ top: this.state.handTop, left: this.state.handLeft }}>
            <img src="http://res.cloudinary.com/forte-3d/image/upload/v1512749704/hand_gkm8wr.png" alt="hand"/>
          </div>  : null
        }
        </MenuContainer>        
     )
  }
      
}



const renderItem = name => <span>{name}</span>

const Arrow = () =>
  <div className="game-wrapper">
    <MenuSelect
      active={true}
      onChoice={i => {console.log("You have chosen", i)}}
      renderItem={renderItem}
      items={[<a href="/apps">Apps</a>, <a href="/contact">contact</a>, <a href="/about">About</a>]} />
  </div>



// title: "The Adventures of Laurentino",
// subtitle: "A command line quest",
// image: "../public/pics/me.png",

// portfolio: "Projects",
// about: "About",
// contact: "Contact",
//   links: "Links"

//   <div className="App">
//         <TopBar />
//         <Title
//           title={this.state.title}
//           subtitle={this.state.subtitle}
//           image={this.state.image}
//         />
//         <Arrow
//           porto={this.state.portfolio}
//           about={this.state.about}
//           contact={this.state.contact}
//           link={this.state.links}
//         >
          
//        </Arrow>
//       </div>