import { Component, h, Prop } from '@stencil/core'
//import Launch from 'material-design-icons/action/svg/production/ic_launch_24px.svg'

@Component({
	tag: 'mvs-card',
	styleUrl: 'mvs-card.scss',
	shadow: true,
})
export class MvsCard {
	@Prop() overline: any
	@Prop() cardtitle: string
	@Prop() subtitle: string
	@Prop() text: string
	@Prop() button: string
	@Prop() link: string = 'http://google.com'
	@Prop() media: string =
		'https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
	@Prop() alt: string = 'Texto alternativo em falta, favor entrar em contato'
	@Prop() width: number

	render() {
		return (
			<div class='root' tabindex='0'>
				<div class='media-container'>
					<img class='media' src={this.media} alt={this.alt} />
				</div>
				<div class='main'>
					<div class='text'>
						<mvs-overline>{this.overline}</mvs-overline>
						<mvs-title level='t5'>
							<a href={this.link}>{this.cardtitle}</a>
						</mvs-title>
						<mvs-subtitle type='two'>{this.subtitle}</mvs-subtitle>
						<mvs-paragraph bodytwo>{this.text}</mvs-paragraph>
					</div>
					<div class='buttons'>
						<mvs-button>{this.button}</mvs-button>
					</div>
				</div>
			</div>
		)
	}
}
