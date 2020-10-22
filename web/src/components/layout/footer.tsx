import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer">
        <a href="" target="_blank" rel="noopener noreferrer">
            <img src="" 
            alt="yWei.io- An aggregated gas price feed, with alerts if the price drops" style={{ width: 125, height: 27}} width="125px" height="27px" />
        </a>
        <br/>

        <small>
            <a href="https://twitter.com/manifoldfinance" className="text-muted">@manifoldfinance</a>
            <span className="ml-2 mr-2">|</span>
            <a href="https://github.com/evoprotocol/ywei" className="text-muted">Github</a>
            <span className="ml-2 mr-2">|</span>
            <a href="/privacy" className="text-muted">Privacy</a>
        </small>
    </footer>
  );
}