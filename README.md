# Ajax

```javascript
// Demo1: fetch post.
// Ajax().post('/').then(function(){
//     console.info('成功');
// });

// Demo2: fetch post with before/after aspects.
Ajax({
    before: (...args) => {
        console.info('Before 开始', args);
    },
    after: (...args) => {
        console.info('After 开始', args);
    }
}).post('/').then(() => {
    console.info('返回数据');
});
```
