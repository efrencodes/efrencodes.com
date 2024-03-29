export interface metadataProps {
	url: string
	title: string
	description: string
	keywords: string
	openGraph: {
		url: string
		siteName: string
		images: {
			url: string
			width: number
			height: number
		}
		locale: string
		type: string
		creator: string
	}
}

export const metadataDefault: metadataProps = {
	url: 'https://efrencodes.com',
	title: 'Efrén Martínez - Desarrollador Frontend',
	description:
		'Desarrollador Frontend especializado en #javascript #vue #react #typescript. Aprendiendo #flutter #dart',
	keywords:
		'querétaro,tecnologia,software,web,desarrollo,fullstack,software engineer,developer,jamstack,vuejs,reactjs,méxico,typescript,tailwindcss,cypress',
	openGraph: {
		url: 'https://efrencodes.com',
		siteName: 'Efrén Martínez - Desarrollador Frontend',
		images: {
			url: 'https://res.cloudinary.com/efrencodes/image/upload/v1674800149/www.efrencodes.com/og-image-efrencodes.webp',
			width: 1920,
			height: 1080
		},
		locale: 'es-MX',
		type: 'summary_large_image',
		creator: '@efrencodes'
	}
}

export const structuredData = {
	'@context': 'http://schema.org',
	'@type': 'Person',
	email: 'mailto:efrencodes@gmail.com',
	image: '',
	jobTitle: 'Desarrollador Frontend',
	name: 'Efrén Martínez',
	url: 'https://www.efrencodes.com/'
}
