import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Caciques",
  description: "Nuestros Ancestros",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Caciques',
        items: [
          { text: 'Arichuna', link: '/caciques/arichuna' },
          { text: 'Baruta', link: '/caciques/baruta' },
          { text: 'Catia', link: '/caciques/catia' },
          { text: 'Chacao', link: '/caciques/chacao' },
          { text: 'Chicuramay', link: '/caciques/chicuramay' },  
          { text: 'Guaicaipuro', link: '/caciques/guaicaipuro' },
          { text: 'Naiguatá', link: '/caciques/naiguata' },
          { text: 'Paramaconi', link: '/caciques/paramaconi' },
          { text: 'Sorocaima', link: '/caciques/sorocaima' },  
          { text: 'Tamanaco', link: '/caciques/tamanaco' },
          { text: 'Terepaima', link: '/caciques/terepaima' },
          { text: 'Tiuna', link: '/caciques/tiuna' },
          { text: 'Urimare', link: '/caciques/urimare' },
          { text: 'Urquia', link: '/caciques/urquia' }          
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
