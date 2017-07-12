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
