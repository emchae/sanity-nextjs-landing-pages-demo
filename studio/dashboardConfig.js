export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e31eeee34a5acc2fae7cf4d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-demo-studio-dwicnng8',
                  apiId: '36f25958-8c62-49b2-b80b-be96f6bce804'
                },
                {
                  buildHookId: '5e31eeeefe161e1d74cf89c3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-demo-web',
                  apiId: '2d6825f0-6424-4bce-8a0f-e1655734e0c7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/emchae/sanity-nextjs-landing-pages-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-demo-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
