import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'med-modal',
  styleUrl: 'modal.scss',
  shadow: true,
})
export class MedModal {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
