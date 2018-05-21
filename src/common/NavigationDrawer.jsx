import React, { Component }  from 'react';
import ReactDOM from 'react-dom';

import { BurgerMenu, push as PushMenu } from 'react-burger-menu';
import classNames from 'classnames';

import '../css/NavigationDrawer.css';

var styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px'
    },
    bmBurgerBars: {
        background: '#373a47'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#404040'
    },
    bmMenu: {
        background: '#404040',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
    },
    bmMenuWrap: {
        zIndex: '2000001'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
}

///////////////////////////////////////////////////////////
// MemuWrap

class MenuWrap extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hidden: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const sideChanged = this.props.children.props.right !== nextProps.children.props.right;

    if (sideChanged) {
      this.setState({hidden : true});

      setTimeout(() => {
        this.show();
      }, this.props.wait);
    }
  }

    show() {
        this.setState({hidden : false});
    }

  render() {
    let style;

    if (this.state.hidden) {
      style = {display: 'none'};
    }

    return (
      <div style={style} className={this.props.side}>
        {this.props.children}
      </div>
    );
  }
}

///////////////////////////////////////////////////////////
// NavigationDrawer

export default class NavigationDrawer extends Component {
    showSettings (event) {
        event.preventDefault();
        this.state = {
            currentMenu: 'push'
        }
    }
    
    changeMenu(menu) {
        this.setState({currentMenu: menu});
    }

    changeSide(side) {
        this.setState({side});
    }
    
    getMenu() {
        const Menu = BurgerMenu[this.state.currentMenu];
        const items = this.getItems();
        let jsx;

        if (this.state.side === 'right') {
            jsx = (
            <MenuWrap wait={20} side={this.state.side}>
                <Menu id={this.state.currentMenu} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right>
                    {items}
                </Menu>
            </MenuWrap>
            );
        } else {
            jsx = (
            <MenuWrap wait={20}>
                <Menu id={this.state.currentMenu} pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
                    {items}
                </Menu>
            </MenuWrap>
            );
        }

        return jsx;
    }

    render () {        
        return (
            <div id="navigation-container">
                <MenuWrap wait={20}>
                    <PushMenu id={'push'}>
                        <div id="logo">
                            <h2 style={{margin: "auto", width: "50%", padding: "30px"}}><img src={require('../img/envelope.svg')} /></h2>
                        </div>
                        <a id="home" className="menu-item" href="/">Home</a>
                        <a id="usa" className="menu-item" href="/ElectionHistories/">United States of America</a>
                    </PushMenu>
                </MenuWrap>
            </div>
        );
    }
}
