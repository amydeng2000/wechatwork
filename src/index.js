const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/add', (req, res) => res.render('pages/addperson'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const axios = require('axios')
const schedule = require('node-schedule')
var sd = require('silly-datetime');
var time=sd.format(new Date(), 'YYYY-MM-DD');

schedule.scheduleJob('0 0 2 * * *', function(){
      axios.post('https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=d84689aa-1e0c-4b3b-bc30-e59311731c2e', {
        "msgtype": "markdown",
        "markdown": {
          "content": "现在是**"+time+"上午十点**\n请大家完成今天的第一次扫群任务，并把扫群的相关数据更新到表格中\n<font color=\"comment\">宁可十年不将军，不可一日不拱卒</font>"
      }
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error)
    })
    })

schedule.scheduleJob('0 0 5 * * *', function(){
      axios.post('https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=d84689aa-1e0c-4b3b-bc30-e59311731c2e', {
        "msgtype": "markdown",
        "markdown": {
          "content": "现在是**"+time+"下午一点**\n请大家完成今天的第二次扫群任务，并把扫群的相关数据更新到表格中\n<font color=\"comment\">宁可十年不将军，不可一日不拱卒</font>"
      }
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error)
    })
    })

schedule.scheduleJob('0 0 8 * * *', function(){
      axios.post('https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=d84689aa-1e0c-4b3b-bc30-e59311731c2e', {
        "msgtype": "markdown",
        "markdown": {
          "content": "现在是**"+time+"下午四点**\n请大家完成今天的第三次扫群任务，并把扫群的相关数据更新到表格中\n<font color=\"comment\">宁可十年不将军，不可一日不拱卒</font>"
      }
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error)
    })
    })
    
schedule.scheduleJob('0 0 13 * * *', function(){
      axios.post('https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=d84689aa-1e0c-4b3b-bc30-e59311731c2e', {
        "msgtype": "markdown",
        "markdown": {
          "content": "现在是**"+time+"晚上九点**\n请确认已经将今天扫群的相关数据更新到表格中\n<font color=\"comment\">晚安</font>"
      }
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error)
    })
    })

schedule.scheduleJob('30 * * * * *', function(){
      axios.post('https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=40cfac9e-2cd8-4f23-bf29-315e3941d314', {
        "msgtype": "markdown",
        "markdown": {
          "content": "❤️"
      }
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error)
    })
    })