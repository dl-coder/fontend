import { Component, h, Prop, State } from '@stencil/core';
import { walletConnection } from '../../global/walletConnection';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  private walletConnection = walletConnection.getInstance();

  @Prop() connected: boolean = false;
  @Prop() account;

  constructor () {
    this.walletConnection.componentWillMount(this);
  };

  render() {
    return (
      <div id="page">
        <header id="header">
          <div id="header-inner">
            <div id="logo">
              <h1><a href="#">Eth<span>emblem</span></a></h1>
            </div>
            <div id="top-nav">
              <ul>
                {this.connected &&
                  <sl-button type="primary" class="connect" disabled>{this.account.slice(0, 12) + "..."}</sl-button>
                }
                {!this.connected &&
                  <sl-button type="primary" class="connect" onClick={ev => this.walletConnection.componentWillMount(this)}>Connect wallet</sl-button>
                }
              </ul>
            </div>
            <div class="clr"></div>
          </div>
        </header>

        <div id="content">
          <div id="content-inner">
            <emblem-nav></emblem-nav>
          </div>
        </div>

        <footer id="footer">
          <div id="footer-inner">
            <sl-button type="primary" size="medium" pill href="https://twitter.com/ethemblem" target="_blank"><sl-icon library="feather" name="twitter"></sl-icon> Twitter</sl-button>
            <sl-button type="primary" size="medium" pill href="https://twitter.com/ethemblem" target="_blank"><sl-icon library="feather" name="send"></sl-icon> Telegram</sl-button>
          </div>
        </footer>
      </div>
    );
  }
}