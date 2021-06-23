export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'seoguys1234/sanity-angular-website'
      }
    },
    { name: 'structure-menu' },
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
                  buildHookId: '60d2f4935fe98cae00d36f25',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-website-studio-xffpqvbn',
                  apiId: 'fe62397d-3ae2-4869-ad30-05d3a7dae335'
                },
                {
                  buildHookId: '60d2f4935fe98cb074d36f32',
                  title: 'Website',
                  name: 'sanity-angular-website-web-4h114z9t',
                  apiId: '8320e0b8-feae-4f95-a4eb-c2877bc70f17'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/seoguys1234/sanity-angular-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-website-web-4h114z9t.netlify.app', category: 'apps'}
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
