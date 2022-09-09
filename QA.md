Q: 使用unplugin-vue-components插件按需引入element-plus后，热更新element组件失效\
A: 判断可能是unplugin-vue-components组件对nuxt3 hmr的支持性问题，舍弃按需引入改成在plugins里手动引入


Q: element-plus修改color base时使用sass变量报错\
A: $colors.primary.base 是基础色值，需要根据其生成其他色彩级别，必须为确定数值，不能使用 CSS 变量
  
   参考链接：
   https://github.com/element-plus/element-plus/issues/6724
  
  
Q: element select/dropdown组件布局混乱\
A: el-popper组件在SSR下支持不友好，需要在外面包一层<ClientOnly>
  
   参考链接：
   https://github.com/element-plus/element-plus/issues/7366
   https://github.com/element-plus/element-plus/issues/7368
  
Q: unocss+vue动态设置class时不加载样式\
A: 在unocss config safelist预先加载样式
  
Q: tooltip在popconfirm中使用无法触发popconfirm的事件\
A: el-popconfirm的reference插槽必须多嵌套一层真实节点
  
   参考链接：
   https://github.com/element-plus/element-plus/issues/7221

Q: computed里获取localstorage.getItem 报错localstorage are not defined\
A: nuxt3 created在服务端完成，此时无localstorage，因此需要在onMounted里获取localstorage
   
   参考链接：
   https://forum.vuejs.org/t/nuxt-3-window-localstorage-problem-floating-ui-pinia-with-localstorage/129846/3
  
Q: unocss @apply部分样式在生产环境失效\
A: @apply语法修改成--at-apply:，具体原因未知
   
   参考链接：
   https://github.com/unocss/unocss/issues/1361
  
Q: 切换路由时报错Cannot read properties of null (reading 'parentNode')\
A: 部分element组件(cascader/dropdown/modal等)需要使用客户端渲染(包裹一层clientonly)





  

  
