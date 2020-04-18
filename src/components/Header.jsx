import React, { Component } from 'react';

class Header extends Component {
    render() {

        return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light header">
            <a className="navbar-brand" href="/">
              SHOPPING DEMO
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">

                <button 
                  className="btn btn-outline-success btn-cart mr-2" 
                  type="button"
                  onClick={this.handleCartClick}
                  >
                  <a href="/cart"><i className="fas fa-shopping-cart"></i></a>
              </button>

              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="button"
                >
                  Search
                </button>
              </form>
              
            </div>
          </nav>
        );
    }
}

export default Header;