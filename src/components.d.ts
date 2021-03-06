/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppRoot {
        "account": any;
        "connected": boolean;
    }
    interface EmblemCard {
        "dollarvalue": number;
        "ethervalue": number;
        "owneraddress": string;
        "spenderaddress": string;
        "type": string;
    }
    interface EmblemMint {
        "receiver": string;
        "selection": string;
    }
    interface EmblemNav {
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLEmblemCardElement extends Components.EmblemCard, HTMLStencilElement {
    }
    var HTMLEmblemCardElement: {
        prototype: HTMLEmblemCardElement;
        new (): HTMLEmblemCardElement;
    };
    interface HTMLEmblemMintElement extends Components.EmblemMint, HTMLStencilElement {
    }
    var HTMLEmblemMintElement: {
        prototype: HTMLEmblemMintElement;
        new (): HTMLEmblemMintElement;
    };
    interface HTMLEmblemNavElement extends Components.EmblemNav, HTMLStencilElement {
    }
    var HTMLEmblemNavElement: {
        prototype: HTMLEmblemNavElement;
        new (): HTMLEmblemNavElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "emblem-card": HTMLEmblemCardElement;
        "emblem-mint": HTMLEmblemMintElement;
        "emblem-nav": HTMLEmblemNavElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
        "account"?: any;
        "connected"?: boolean;
    }
    interface EmblemCard {
        "dollarvalue"?: number;
        "ethervalue"?: number;
        "owneraddress"?: string;
        "spenderaddress"?: string;
        "type"?: string;
    }
    interface EmblemMint {
        "receiver"?: string;
        "selection"?: string;
    }
    interface EmblemNav {
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "emblem-card": EmblemCard;
        "emblem-mint": EmblemMint;
        "emblem-nav": EmblemNav;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "emblem-card": LocalJSX.EmblemCard & JSXBase.HTMLAttributes<HTMLEmblemCardElement>;
            "emblem-mint": LocalJSX.EmblemMint & JSXBase.HTMLAttributes<HTMLEmblemMintElement>;
            "emblem-nav": LocalJSX.EmblemNav & JSXBase.HTMLAttributes<HTMLEmblemNavElement>;
        }
    }
}
