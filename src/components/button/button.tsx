import { Component, Host, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'med-button',
  /* styleUrls: {
    default: 'button.default.scss'
  }, */
  styleUrl: 'button.default.scss',
  shadow: true,
})
export class MedButton {
  @Element() el!: HTMLElement;

  @Prop() href: string | undefined;

  render() {
    let el;
    const { href } = this;

    if (!href) {
      el = (
        <button class="button">
          <slot></slot>
        </button>
      );
    } else {
      el = (
        <a class="anchor" href={href}>
          <slot></slot>
        </a>
      );
    }

    return (
      <Host>
        {el}
      </Host>
    );
  }

}
