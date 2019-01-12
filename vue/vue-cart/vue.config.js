module.exports = {
  configureWebpack: {
    devServer: {
      host: '0.0.0.0',
      port: 8081,
      open: true, //配置自动启动浏览器
      before(app){
        app.get("/api/goods", function(req, res){
          res.json({
            code: 0,
            list: [
              {id: 1, text: "web全栈架构师", price: 100},
              {id: 2, text: "Python架构师", price: 80},
              {id: 3, text: "java开发", price: 90},
              {id: 4, text: "php开发", price: 120},
              {id: 5, text: "朱莉萍", price: 250},
            ]
          })
        })
      }
    }
  }
}