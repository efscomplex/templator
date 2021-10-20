module.exports = [
    {
        type: 'list',
        name: 'framework',
        message: 'choose your flavour (framework/lib)',
        default: 'solid',
        choices: ['react', 'vue', 'solid']
    },
    {
        type: 'checkbox',
        name: 'typescript',
        message: 'use typescript?',
        choices: ['Yes', 'No'],
        filter: function (response) { return (response[0] === 'Yes' ? 'ts' : ''); },
        default: 'Yes'
    },
    {
        type: 'list',
        name: 'styles',
        message: 'choose lib for Styles',
        choices: ['Tailwind', 'Sass', 'Css', 'PostCss'],
        filter: function (response) {
            console.log('response styles', response);
            return response;
        },
        default: 'tailwind'
    },
    {
        type: 'confirm',
        name: 'minimal',
        message: 'minimal setup? (y/n)',
        default: true
    },
    {
        type: 'input',
        name: 'path',
        message: 'output path',
        default: '.'
    }
];
