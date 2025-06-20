// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      logo: {
        src: './src/assets/logo.png',
        replacesTitle: true
      },
      title: 'Coding Adda Docs',
      description:
        'Welcome to Coding Adda Docs, the one stop documentation for all your tech quries',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Yuvadi29/Coding-Adda-Docs'
        },
		{
			icon: 'instagram',
			label: 'instagram',
			href: 'https://instagram.com/_coding_adda'
		},
		{
			icon: 'linkedin',
			label: 'linkedin',
			href: 'https://www.linkedin.com/company/addacoding'
		}
      ],
      sidebar: [
        {
          label: "Learn HTML",
          autogenerate: {directory: 'Learn-HTML'}
        },
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', slug: 'guides/example' }
          ]
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' }
        }
      ],
      customCss: [
        './src/style.css'
      ]
    })
  ]
})
