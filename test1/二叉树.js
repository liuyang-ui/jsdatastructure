//封装二叉搜索树
function BinarySerachTree(){
    function Node(key){
        this.key=key
        this.left=null
        this.value=null
        this.right=null
    }
    //属性
    this.root=null;
    //方法
    //插入数据
    BinarySerachTree.prototype.insert=function(key){
        //创建节点
        var newNode=new Node(key,value)
        // 2.判断根节点是否有值
        if(this.root==null){
            this.root=newNode
        }else{
          this.insertNode(this.root,newNode)  
        }
    }
    BinarySerachTree.prototype.insertNode=function(node,newNode){
        if(newNode.key<node.key){//向左查找
            if(node.left==null){
                node.left=newNode
            }else{
                this.insertNode(this.insertNode(node.left,newNode))
            }   
        }else{//向右查找
           if(node.right==null){
               node.right=newNode
           } else{
               this.insertNode(node.right,newNode)
           }
        }
    }
     
}
 