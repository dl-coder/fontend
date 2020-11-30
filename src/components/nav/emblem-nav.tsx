import { Component, h } from '@stencil/core';

@Component({
  tag: 'emblem-nav',
  styleUrl: 'emblem-nav.css',
})
export class Menu {
  render() {
    return (
      <sl-tab-group>
        <sl-tab slot="nav" panel="stats">Stats</sl-tab>
        <sl-tab slot="nav" panel="mint">Mint</sl-tab>
        <sl-tab slot="nav" panel="about">About</sl-tab>
        <sl-tab-panel name="stats">General statistics:<br></br></sl-tab-panel>
        <sl-tab-panel name="mint"><emblem-mint></emblem-mint></sl-tab-panel>
        <sl-tab-panel name="about">About:<br></br></sl-tab-panel>
      </sl-tab-group>
    );
  }
}