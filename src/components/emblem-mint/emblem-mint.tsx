import { Component, h, Prop } from '@stencil/core';
import { walletConnection } from '../../global/walletConnection';

enum selectionLongText {
    imi = "I made it (1+ in Ether)",
    ngmi = "Not gonna make it (0.05 in Ether)"
}

enum selectionInt {
    imi,
    ngmi
}

enum selectionCost {
    imi = 1,
    ngmi = 0.05
}

@Component({
    tag: 'emblem-mint',
    styleUrl: 'emblem-mint.css'
})
export class mint {
    @Prop()
    selection = "";

    @Prop()
    receiver = "";

    private walletConnection = walletConnection.getInstance();

    onChangeValue(ev) {
        this.selection = ev.target.value;
    }

    onChangeText(ev) {
        this.receiver = ev.target.value;
    }

    render() {
        return (
            <div class="log-form">
                <sl-form class="form-overview">
                    <sl-input name="address" type="text" label="Receiving address (empty for own)" size="small" clearable onsl-change={ev => this.onChangeText(ev)}></sl-input>
                    <sl-select placeholder="Select one" size="small" clearable onsl-change={ev => this.onChangeValue(ev)}>
                        <sl-menu-item value="imi">{selectionLongText["imi"]}</sl-menu-item>
                        <sl-menu-item value="ngmi">{selectionLongText["ngmi"]}</sl-menu-item>
                    </sl-select>
                    <br></br>
                    {this.selection &&
                      <sl-button submit size="small" onClick={() => this.walletConnection.mint(selectionInt[this.selection], selectionCost[this.selection], this.receiver)}>Create emblem!</sl-button>
                    } <br></br>
                    <div class={this.selection ? "preview" : "preview hidden"}>
                        <div> Preview: </div>
                        <emblem-card dollarvalue={0} ethervalue={0} type={this.selection} owneraddress="0x0000000000000000000000000000000000000000" spenderaddress="0x0000000000000000000000000000000000000000" onChange={this.onChangeValue}></emblem-card>
                    </div>
                </sl-form>
            </div>
        );
    }
}