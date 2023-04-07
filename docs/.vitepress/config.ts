import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Caciques",
  description: "Nuestros Ancestros",
  base: '/caciques/', //  The default path during deployment / secondary address / base can be used/
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [      
      { text: 'Inicio', link: '/' },
      { text: 'Comenzar', link: '/caciques/arichuna' },
      { text: 'CaribesTIC', link: 'https://caribestic.github.io/' }
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
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/CaribesTIC/caciques' }
    ]
  }
})
