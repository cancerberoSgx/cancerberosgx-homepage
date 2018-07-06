// const inquirer = require('inquirer')
import * as inquirer from 'inquirer'
import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';

inquirer.prompt<{user: string, password: string}>([
  {
    type: 'input', 
    message: 'GitHub user name',
    name: 'user'
  }, 
  {
    type: 'password', 
    message: 'GitHub password', 
    name: 'password'
  }
])
.then(a=>{
  execSync(`curl -u "${a.user}:${a.password}" "https://api.github.com/user/repos" > tmp_repos.json`)
  const repos = JSON.parse(readFileSync('tmp_repos.json').toString()) as any[]
  const notForks = repos.filter(r=>!r.fork)
  console.log(notForks.length);
  writeFileSync('tmp_repos_notForks.json', JSON.stringify(notForks, null, 2))
  
})