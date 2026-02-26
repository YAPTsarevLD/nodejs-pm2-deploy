module.exports = {
  apps: [{
    name: 'mesto-frontend',
    script: 'npm',
    args: 'run start',
  }],

  deploy: {
    production: {
      user: 'tsarev_l',
      host: '130.193.53.21',
      ref: 'origin/master',
      repo: 'https://github.com/YAPTsarevLD/nodejs-pm2-deploy.git',
      path: '/home/tsarev_l/frontend-deploy',
      'post-deploy': 'export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && cd frontend && npm i && npm run build && cp -r build/* /home/tsarev_l/mesto-frontend/'
    },
  },
};
