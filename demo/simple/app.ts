const axios = require('../../src/index')

// 不带参数的get
axios({
    method: 'get',
    url: '/simple/get'
})