//使用领接表的方式来表示边，使用字典类来存储邻接表
//封装字典类
function Dictionary() {
    //字典属性
    this.items = {}
    //在字典中添加键值对
    Dictionary.prototype.set = function (key, value) {
        this.items[key] = value
    }
    //判断字典中是否有某个Key
    Dictionary.prototype.has = function (key) {
        return this.items.hasOwnProperty(key)
    }
    //从字典中移除元素
    Dictionary.prototype.remove = function (key) {
        if (!this.has(key)) return false
        delete this.items[key]
        return true
    }
    //根据Key获取value
    Dictionary.prototype.get = function (key) {
        return this.has(key) ? this.items[key] : undefined
    }
    //获取所有的keys
    Dictionary.prototype.keys = function () {
        return Object.keys(this.items)
    }
    //size方法
    Dictionary.prototype.size = function () {
        return this.keys().length
    }
    //clear方法
    Dictionary.prototype.clear = function () {
        this.items = {}
    }
}
//基于数组封装队列类
function Queue() {
    //属性
    this.items = []
    //将元素加入到对列中
    Queue.prototype.enqueue = element => {
        this.items.push(element)
    }
    //从对列中华删除前端元素
    Queue.prototype.dequeue = () => {
        return this.items.shift()
    }
    //查看前端元素
    Queue.prototype.front = () => {
        return this.items[0]
    }
    //查看对列是否为空
    Queue.prototype.isEmpty = () => {
        return this.items.length == 0
    }
    //查看对列中元素的个数
    Queue.prototype.size = () => {
        return this.itwms.length
    }
    //toString方法
    Queue.prototype.toString = () => {
        let resultString = ''
        for (let i of this.items) {
            resultString += i + ' '
        }
        return resultString
    }

}
//创建图类
function Graph() {
    //属性：顶点(数组)/边（字典）
    this.vertexes = []//顶点
    this.edges = new Dictionary()//边
    //添加顶点
    Graph.prototype.addVertex = function (v) {
        this.vertexes.push(v)
        this.edges.set(v, [])
    }
    //添加边
    Graph.prototype.addEdge = function (v1, v2) {//传入两个顶点并且为他们添加边
        this.edges.get(v1).push(v2)
        this.edges.get(v2).push(v1)//表示是无向表，故要添加互相指向的两条边
    }
    Graph.prototype.toString = function () {
        let resultString = ''
        //遍历所有的顶点以及顶点对应的边
        for (let i = 0; i < this.vertexes.length; i++) {
            resultString += this.vertexes[i] + '-->'
            let vEdges = this.edges.get(this.vertexes[i])
            for (let j = 0; j < vEdges.length; j++) {
                resultString += vEdges[j] + ' '
            }
            resultString += '\n'
        }
        return resultString
    }
    Graph.prototype.initializeColor = function () {
        let colors = []
        for (let i = 0; i < this.vertexes.length; i++) {
            colors[this.vertexes[i]] = 'white'
        }
        return colors
    }
    Graph.prototype.bfs = function (initv, handler) {
        //初始化颜色
        let colors = this.initializeColor()
        //创建队列
        let que = new Queue()
        //将顶点加入到对列中
        que.enqueue(initv)
        //循环从对列中取出的元素，队列为空停止
        while (!que.isEmpty()) {
            //从对列首部取出一个顶点
            let v = que.dequeue()
            //从字典对象中edges中获取和该顶点相邻的其他顶点组成的数组
            let vNeighbours = this.edges.get(v)
            //将v的颜色变为灰色
            color[v] = 'gray'
            //遍历v所有相邻的顶点vNeighbours,并且加入队列中
            for (let i = 0; i < vNeighbours.length; i++) {
                const a = vNeighbours[i];
                //判断相邻的顶点是否被探测过，被探测过不加入队列中，并且加入队列后变为黑色，表示被探测过
                if (colors[a] == 'white') {
                    colors[a] = 'gray'
                    que.enqueue(a)
                }
            }
            handler(v)
            //顶点V的所有白色的相邻顶点都加入到队列后，将顶点v设置为黑色，此时黑色顶点位于最前面
            colors[v] = 'black'
        }
    }

}
Graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

//测试BFS遍历方法
let result=''
graph.bfs(graph.vertexes[0],function(v){
    result+=v+'-'
})
console.log(result)