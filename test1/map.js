//使用领接表的方式来表示边，使用字典类来存储邻接表
//封装字典类
function Dictionary(){
    //字典属性
    this.items={}
    //在字典中添加键值对
    Dictionary.prototype.set=function(key,value){
        this.items[key]=value
    }
    //判断字典中是否有某个Key
    Dictionary.prototype.has=function(key){
        return this.items.hasOwnProperty(key)
    }
    //从字典中移除元素
    Dictionary.prototype.remove=function(key){
      if(!this.has(key)) return false
      delete this.items[key]
      return true  
    }
    //根据Key获取value
    Dictionary.prototype.get=function(key){
        return this.has(key)?this.items[key]:undefined
    }
    //获取所有的keys
    Dictionary.prototype.keys=function(){
        return Object.keys(this.items)
    }
    //size方法
    Dictionary.prototype.keys=function(){
        return this.keys().length
    }
    //clear方法
    Dictionary.prototype.clear=function(){
        this.items={}
    }
}
//基于数组封装队列类
function Queue(){
    //属性
    this.items=[]
    //将元素加入到对列中
    Queue.prototype.enqueue=element=>{
        this.items.push(element)
    }
    //从对列中华删除前端元素
    Queue.prototype.dequeue=()=>{
        return this.items.shift()
    }
    //查看前端元素
    Queue.prototype.front=()=>{
        return this.items[0]
    }
    //查看对列是否为空
    Queue.prototype.isEmpty=()=>{
        return this.items.length==0
    }
    //查看对列中元素的个数
    Queue.prototype.size=()=>{
        return this.itwms.length
    }
    //toString方法
    Queue.prototype.toString=()=>{
        let resultString=''
        for(let i of this.items){
            resultString+=i+' '
        }
        return resultString
    }

}
//创建图类
function Graph(){
    //属性：顶点(数组)/边（字典）
    this.vertexes=[]//顶点
    this.edges=new Dictionary()//边
    //添加顶点
    Graph.prototype.addVertex=function(v){
        this.vertexes.push(v)
        this.edges.set(v,[])
    }
    //添加边
    Graph.prototype.addEdge=function(v1,v2){//传入两个顶点并且为他们添加边
        this.edges.get(v1).push(v2)
        this.edges.get(v2).push(v1)//表示是无向表，故要添加互相指向的两条边
    }
    Graph.prototype.toString=function(){
        let resultString=''
        //遍历所有的顶点以及顶点对应的边
        for(let i=0;i<this.vertexes.length;i++){
            resultString+=this.vertexes[i]+'-->'
            let vEdges=this.edges.get(this.vertexes[i])
            for(let j=0;j<vEdges.length;j++){
                resultString+=vEdges[j]+' '
            }
            resultString+='\n'
        }
        return resultString
    }

}