import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { ButtonColor, BUTTON_COLOR, RESET_CSS } from '../styles';

/**
 * wc-button
 *
 * @slot - This element has a slot
 */
@customElement('wc-button')
export class WCButton extends LitElement {
  static override styles = [
    ...RESET_CSS,
    css`
      :host {
        min-width: 180px;
      }
    `,
  ];

  /**
   * Buttonの色を指定する（success、error、warning）
   */
  @property({ type: String })
  color: ButtonColor = 'success';

  override render() {
    const buttonStyle = styleMap({
      'background-color': BUTTON_COLOR[this.color].background,
      color: BUTTON_COLOR[this.color].font,
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
