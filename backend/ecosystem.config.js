module.exports = {
  apps: [{
    name: 'mesto-backend',
    script: './dist/app.js',
    env_production: {
      NODE_ENV: 'production',
    },
  }],

  deploy: {
    production: {
      user: 'tsarev_l',
      host: '130.193.53.21',
      ref: 'origin/master',
      repo: 'https://github.com/YAPTsarevLD/nodejs-pm2-deploy.git',
      path: '/home/tsarev_l/nodejs-pm2-deploy',
      'post-deploy': 'cd backend && npm i && npm run build && pm2 restart ecosystem.config.js --env production',
    },
  },
};
