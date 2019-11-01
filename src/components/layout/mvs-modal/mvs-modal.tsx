import { Component, h, Prop, Listen } from '@stencil/core';


@Component({
	tag: 'mvs-modal',
	styleUrl: 'mvs-modal.scss',
	shadow: true,
})
export class MvsModal {
	@Prop({ reflect: true, reflectToAttr: true }) name: string
	@Prop() show: boolean

	// @Listen('showModal', { capture: true })
	// showModal(ev) {
	// 	console.log(ev);
	// }

	@Listen('onShowModal', { target: 'document' })
	showModal(event) {
		if (event.detail.modal === this.name) this.show = event.detail.visible;
	}

	hide(e) {
		if (e.target.offsetParent === null) {
			e.target.classList.remove('show')
		} else if (e.target.id === 'close') {
			e.target.offsetParent.classList.remove('show')
		}
	}

	render() {
		return (
			<div
				id={this.name}
				class={'dialog ' + (this.show ? 'show' : '')}
				onClick={e => this.hide(e)}
			>
				<div class='modal open'>
					<div class='header'>
						<mvs-button
							variant='contained'
							id='close'
							class='icon'
							onClick={this.hide.bind(this)}
						>
							close
						</mvs-button>
					</div>
					<slot />
				</div>
			</div>
		)
	}
}
