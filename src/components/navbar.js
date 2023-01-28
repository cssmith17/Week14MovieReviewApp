import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-primary bg-body-tertiary" data-bs-theme="light">
              <div className="container-fluid">
                
              <a className="navbar-brand" href="#">Movie Reviews</a>

      
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
        
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link disabled" href="./">
                        Home
                      </a>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link disabled" href="./">
                        About
                      </a>
                    </li>
        
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link disabled"
                        id="navbarDropdownMenuLink"
                        href="./"
                      >
                        Shop
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="./">
                        Movie Reviews <span>(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="./">
                        Contact Us
                      </a>
                    </li>
                  </ul>
              </div>
              </div>
            </nav>
          );
        }
      }