import axios from '../../src/index'
// 参数为数组
axios({
    method: 'get',
    url: '/base/get',
    params: {
        a: 1,
        b: 2
    }
})

axios({
    method: 'get',
    url: '/base/get',
    params: {
        foo: ['bar', 'baz']
    }
})

// 参数为对象
axios({
    method: 'get',
    url: '/base/get',
    params: {
        foo: {
            bar: 'baz'
        }
    }
})

const date = new Date()
// 参数为Date类型
axios({
    method: 'get',
    url: '/base/get',
    params: {
        date
    }
})

// 参数为特殊字符
axios({
    method: 'get',
    url: '/base/get',
    params: {
        foo: '@:$, '
    }
})

// 忽略空值
axios({
    method: 'get',
    url: '/base/get',
    params: {
        foo: 'bar',
        baz: null
    }
})

// 丢弃url的哈希标志
axios({
    method: 'get',
    url: '/base/get#hash',
    params: {
        foo: 'bar'
    }
})

// 保存url中已存在的参数
axios({
    method: 'get',
    url: '/base/get?foo=bar',
    params: {
        bar: 'baz'
    }
})


// // // post对象实现
// // axios({
// //     method: 'post',
// //     url: '/base/post',
// //     params: {
// //         a: 1,
// //         b: 2
// //     }
// // })