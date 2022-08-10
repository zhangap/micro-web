const router = require('koa-router')()

router.prefix('/vue2')

router.get('/car/list', function (ctx, next) {
  // ctx.request.query
  ctx.body = [
    {
      img: 'https://img1.xcarimg.com/b278/s13591/20220321171923999544003160063.jpg',
      name: '沃尔沃'
    },
    {
      img: 'https://img1.xcarimg.com/b278/s13591/20220321171923999544003160063.jpg',
      name: '沃尔沃'
    },
    {
      img: 'https://img1.xcarimg.com/b278/s13591/20220321171923999544003160063.jpg',
      name: '沃尔沃'
    },
    {
      img: 'https://img1.xcarimg.com/b278/s13591/20220321171923999544003160063.jpg',
      name: '沃尔沃'
    },
    {
      img: 'https://img1.xcarimg.com/b278/s13591/20220321171923999544003160063.jpg',
      name: '沃尔沃'
    },
    {
      img: 'https://img1.xcarimg.com/b278/s13591/20220321171923999544003160063.jpg',
      name: '沃尔沃'
    },
    {
      img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1695163309,2577846378&fm=26&gp=0.jpg',
      name: '沃尔沃'
    },
    {
      img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1695163309,2577846378&fm=26&gp=0.jpg',
      name: '沃尔沃'
    },
  ]
})

module.exports = router
