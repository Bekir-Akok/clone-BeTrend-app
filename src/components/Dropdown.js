import React from 'react';

class Dropdown extends React.Component{

    constructor(){
        super();


        this.state  = {
            showMenu: false,
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }
    
    showMenu(event) {
        
        event.preventDefault();
        
        this.setState({ showMenu: true }, () => {
            document.addEventListener('mouseout', this.closeMenu);
          });
      }

      closeMenu(event) {
        if (!this.dropdownMenu.contains(event.target)) {
      
            this.setState({ showMenu: false }, () => {
              document.removeEventListener('mouseout', this.closeMenu);
            });  
            
          }
      }

    render(){
        return(
            <ul>
            <li  onMouseOver={this.showMenu}
                ref={(element) => {
                this.dropdownMenu = element;}}>
                <a href="/category" className="cat-hov">{this.props.name}</a>
                {this.state.showMenu
                ? (<div className="drop-menu">
                    <div className="drop-item">
                        <div className="drop-item-1">
                           <h1>Category</h1>
                            <ul>
                                <li><a href="/category">Category I</a></li>
                                <li><a href="#">Category II</a></li>
                                <li><a href="#">Category III</a></li>
                                <li><a href="#">Category IV</a></li>
                            </ul> 
                        </div>
                        <div className="drop-item-1">
                            <h1>Category</h1>
                            <ul>
                                <li><a href="#">Category I</a></li>
                                <li><a href="#">Category II</a></li>
                                <li><a href="#">Category III</a></li>
                                <li><a href="#">Category IV</a></li>
                            </ul> 
                        </div>
                        <div className="drop-item-1">
                            <h1>Category</h1>
                            <ul>
                                <li><a href="#">Category I</a></li>
                                <li><a href="#">Category II</a></li>
                                <li><a href="#">Category III</a></li>
                                <li><a href="#">Category IV</a></li>
                            </ul> 
                        </div>
                        <div className="drop-item-2">
                            <h1>Category</h1>
                            <ul>
                                <li><a href="#">Category I</a></li>
                                <li><a href="#">Category II</a></li>
                                <li><a href="#">Category III</a></li>
                                <li><a href="#">Category IV</a></li>
                            </ul> 
                        </div>
                    </div>
                        <div className="drop-img">
                            <img src={this.props.src}></img>
                            <img src={this.props.src}></img>
                        </div>
                </div>)
                :(null)} 
            </li>
            </ul>            
        )           
    }
}

export default Dropdown