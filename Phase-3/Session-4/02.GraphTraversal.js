

class Graph{

    constructor(v){
        this.V = v;
        this.adj= new Array(v);
        for(let i=0; i<v ; i++)
            this.adj[i]= [];
        
    }

    //function to add an edge into graph
    addEdge(v,w){
        //we are adding w to v's list
        this.adj[v].push(w);
    }
    DFSutil(v,visited){
        visited[v]=true;
        console.log(v+ " ");
        //do this for all the vertices adjacent to this vertices
        for(let i of this.adj[v].values()){
            let n=i;
            if(!visited[n])
                this.DFSutil(n,visited);
        }
    }

    DFS(v){
        //mark all the vertices as not visited (set as false by default)
        let visited= new Array(this.V);
        for(let i=0;i<this.V;i++)
            visited[i]=false;
        
        //call recursive helper function to print DFS traversal
        this.DFSutil(v,visited);
    }
}


g= new Graph(7);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(0,3);
g.addEdge(1,2);
g.addEdge(2,0);
g.addEdge(2,3);
g.addEdge(2,4);
g.addEdge(4,5);
g.addEdge(4,6);

console.log("DFS starting from vertex 0: ");
g.DFS(0);

console.log("DFS starting from vertex 1: ");
g.DFS(1);

console.log("DFS starting from vertex 4: ");
g.DFS(4);
 