import { Component, h, Prop } from '@stencil/core';

enum emblemShortText {
  imi = "I made it",
  ngmi = "Not gonna make it"
}

enum emblemLongText {
  imi = "I am fucking rich, i don`t care!",
  ngmi = "Someone has decided that this wallet is never gonna make it!"
}

enum imageUri {
  imi = "https://memegenerator.net/img/instances/76265763.jpg",
  ngmi = "https://blog.traveloka.com/en/wp-content/uploads/sites/3/2018/08/wanna-travel-but-broke.jpg"
}

@Component({
  tag: 'emblem-card',
  styleUrl: 'emblem-card.css',
})
export class Card {
  @Prop()
  dollarvalue : number = 0 ;
  @Prop()
  ethervalue : number = 0;
  @Prop()
  type : string = "imi" ;
  @Prop()
  owneraddress : string = "0x0000000000000000000000000000000000000000";
  @Prop()
  spenderaddress : string = "0x0000000000000000000000000000000000000000";

  formatName (type : string, short : boolean|undefined) {
    if (short) {
      return emblemShortText[type];
    }
    return emblemLongText[type];
  };

  render() {
    return (
      <sl-card>
      <img
          slot="image"
          src={imageUri[this.type]}
      ></img>
      <strong><h3> {this.formatName(this.type, true)} </h3></strong><br></br>
      Spend by:      {this.owneraddress}<br></br>
      Transferred to:  {this.spenderaddress}<br></br>
      Spend Ether:   {this.ethervalue} <br></br>
      Spend Dollarvalue at creationtime: {this.ethervalue} $ <br></br>
      <br></br>
      <small>{this.formatName(this.type, false)}</small>
      <div slot="footer">
          <sl-button class="socialbutton" type="default" pill href={"https://etherscan.io/address/"+this.owneraddress} target="_blank">Show owner address on Etherscan</sl-button>
          <sl-button class="socialbutton" type="default" pill href={"https://etherscan.io/address/"+this.spenderaddress} target="_blank">Show spender address on Etherscan</sl-button>
      </div>
      </sl-card>
    );
  }
}