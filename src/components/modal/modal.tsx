import { Component, Host, h, Prop, Method, Element } from '@stencil/core';
import { getClassMap } from '../../utils/theme';
import { ComponentProps, FrameworkDelegate, ComponentRef } from '../../utils/interfaces';
import { attachComponent } from '../../utils/framework';
import { deepReady } from '../../utils/transition';

@Component({
  tag: 'med-modal',
  styleUrl: 'modal.ios.scss',
  shadow: true,
})
export class MedModal {

  @Element() el!: HTMLMedModalElement;

  presented = false;
  // Reference to the user's provided modal content
  private usersElement?: HTMLElement;

  /** @internal */
  @Prop() delegate?: FrameworkDelegate;

  /**
   * Additional classes to apply for custom CSS. If multiple classes are
   * provided they should be separated by spaces.
   */
  @Prop() cssClass?: string | string[];
  /**
   * The element that presented the modal. This is used for card presentation effects
   * and for stacking multiple modals on top of each other. Only applies in iOS mode.
   */
  @Prop() presentingElement?: HTMLElement;

  /**
  * The data to pass to the modal component.
  */
  @Prop() componentProps?: ComponentProps;

  /**
   * The component to display inside of the modal.
   */
  @Prop() component!: ComponentRef;


  /**
   * Present the modal overlay after it has been created.
   */
  @Method()
  async present(): Promise<void> {
    if (this.presented) {
      return;
    }
    const container = this.el.querySelector(`.modal-wrapper`);
    if (!container) {
      throw new Error('container is undefined');
    }
    const componentProps = {
      ...this.componentProps,
      modal: this.el
    };

    //Todo: Entender como funciona
    this.usersElement = await attachComponent(this.delegate, container, this.component, ['ion-page'], componentProps);
    await deepReady(this.usersElement);

    // writeTask(() => this.el.classList.add('show-modal'));

    // await present(this, 'modalEnter', iosEnterAnimation, mdEnterAnimation, this.presentingElement);

    // if (this.swipeToClose) {
    //   this.initSwipeToClose();
    // }
  }

  render() {
    return (
      <Host
        no-router
        aria-modal="true"
        tabindex="-1"
        class={{
          [`modal-card`]: this.presentingElement !== undefined,
          ...getClassMap(this.cssClass)
        }}
        style={{
          // zIndex: `${20000 + this.overlayIndex}`,
        }}
      //onIonBackdropTap={this.onBackdropTap}
      //onIonDismiss={this.onDismiss}
      //onIonModalDidPresent={this.onLifecycle}
      //onIonModalWillPresent={this.onLifecycle}
      //onIonModalWillDismiss={this.onLifecycle}
      //onIonModalDidDismiss={this.onLifecycle}>
      >
        <div class="modal-shadow"></div>

        <div tabindex="0"></div>

        <div
          role="dialog"
          class="modal-wrapper ion-overlay-wrapper"
        >
        </div>

        <div tabindex="0"></div>
      </Host>
    );
  }
}
