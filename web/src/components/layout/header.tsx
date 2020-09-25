
import React from 'react';

export const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand navbar-dark">
      <a className="navbar-brand" href="/">
        <span role="img" aria-label="Fuel pump">⛽</span> <small className="text-muted">GasEVO - GasWatcher</small>
      </a> 
      <div className="ml-auto mr-1">
        <ul className="navbar-nav text-right">
          <li className="nav-item active">
            <a className="nav-link" href="/stats">Stats</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="https://manifold.finance/">EVO Protocol SDK</a>
          </li>
           <li className="nav-item active">
            <a className="nav-link" href="https://github.com/sambacha/gasevo/">Whitepaper</a>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
}
