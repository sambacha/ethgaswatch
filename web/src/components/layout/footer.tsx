
import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer">
            <img src="" 
            alt="GasEVO GasWatch" style={{ width: 125, height: 27}} width="125px" height="27px" />
        </a>
        <br/>

        <small>
            <a href="https://twitter.com/wslyvh" className="text-muted">@wslyvh</a>
            <span className="ml-2 mr-2">|</span>
            <a href="https://github.com/wslyvh/ethgaswatch" className="text-muted">GasWatch GitHub</a> <br>
      <a href="https://github.com/sambacha/gasevo" className="text-muted">GasEVO GitHub</a>
            <a href="https://github.com/wslyvh/ethgaswatch" className="text-muted">Github</a>
            <span className="ml-2 mr-2">|</span>
            <a href="/privacy" className="text-muted">Privacy</a>
        </small>
    </footer>
  );
}
