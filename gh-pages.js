var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'build',
        repo: 'https://github.com/acgandhi/light-demo-frontend.git', // Update to point to your repository  
        user: {
            name: 'Amar Gandhi - Automated Build', // update to use your name
            email: 'amarg1@vmware.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)