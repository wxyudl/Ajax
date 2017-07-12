var Ajax = function(options = {}){
    class Ajax{
        constructor(){
            this.beforeSend = options.before || (() => {});
            this.afterSend = options.after || (() => {});
        }
        
        post(...args){
            let _this = this;
            let p = fetch(...args);
            
            this.beforeSend(...args)
            
            p.then(function(res){
                _this.afterSend(res);
            }); 

            return p;
        }
        
        put(){
        
        }
        
        delete(){
        
        }
        
        get(){
        
        }
    }
    return new Ajax;
};

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
