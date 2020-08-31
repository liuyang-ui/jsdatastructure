//设计哈希函数

function HashTable() {
    //属性
    this.storage = []
    this.count = 0
    //加载因子
    this.limit = 7
    //方法 
    HashTable.prototype.hashFunc=function(str,size) {
        //定义hashCode编码
        var hashCode = 0
        //霍纳算法,来计算hashCode的值
        for (var i = 0; i < str.length; i++) {
            hashCode = 37 * hashCode + str.charCodeAt(i)
        }
        //取余操作
        var index = hashCode % size
        return index
    }
    //插入与修改数据
    HashTable.prototype.put=function(key,value){
        //1.根据Key获取对应的index
        var index=this.hashFunc(key,value)
        //2.根据index取出对应的bucket
        var bucket=this.storage[index]
        //3.判断该bucket是否是null
        if(bucket==null){
            bucket=[]
            this.storage[index]=bucket
        }
        //4.判断是否是修改数据
        for(var i=0;i<bucket.length;i++){
            var tuple=bucket[i]
            if(tuple[0]==key){
                tuple=value
                return
            }
        }
        //5.进行添加操作
        bucket.push([key,value])
        this.count+=1
    }

}

