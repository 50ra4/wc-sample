import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';

const BUTTON_COLOR = {
  success: {
    font: '#fafafa',
    background: '#2e7c31',
  },
  error: {
    font: '#fafafa',
    background: '#c62828',
  },
  warning: {
    font: '#212121',
    background: '#fdd835',
  },
} as const;

type ButtonColor = keyof typeof BUTTON_COLOR;

/**
 * wc-button
 *
 * @slot - This element has a slot
 */
@customElement('wc-button')
export class WCButton extends LitElement {
  static override styles = css`
    :host {
      min-width: 180px;
    }
  `;

  /**
   * Buttonの色を指定する（success、error、warning）
   */
  @property({type: String})
  color: ButtonColor = 'success';

  override render() {
    const buttonStyle = styleMap({
      'background-color': BUTTON_COLOR[this.color].background,
      'font-color': BUTTON_COLOR[this.color].font,
    });

    return html`
      <button @click=${this._onClick} style="${buttonStyle}">
        <slot></slot>
      </button>
    `;
  }

  private _onClick() {
    console.log(`clicked ${this.color} wc-button`);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wc-button': WCButton;
  }
}
