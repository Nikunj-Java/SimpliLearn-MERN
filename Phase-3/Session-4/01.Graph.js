

class Graph{
    //define vertex array and adjacent list

    constructor(noOfVertices){
        this.noOfVertices=noOfVertices;
        this.AdjList=new Map();
    }

    //function to be implemented
    //1. addVertex(v);
    //2. addEdge(v,w);
    //3. printGraph();

    //1. add vertex to the graph
    addVertex(v){
        //verted initialised with null edge
        this.AdjList.set(v,[]);
    }

    //2. addEdge to the graph
    addEdge(v,w){
        //first get the list of vertex v and then put it in a edge between v and w
        this.AdjList.get(v).push(w);

        //since the graph is undirectional
        //add an edge from w to  v also

        this.AdjList.get(w).push(v);
    }

    //3. printing the vertex and adjacencylist
    printGraph(){

        //get all the vertices

        var get_keys=this.AdjList.keys();

        for(var i of get_keys){
            //get corresponding adjacency list for  the vertex
            var get_value=this.AdjList.get(i);
            var conc ="";

            for (var j of get_value){
                conc+= j + " ";
            }

            console.log(i + "->"+conc);
        }
    }
}

var g= new Graph(6);
var vertices=['A','B','C','D','E','F'];

for (var i=0 ;i<vertices.length;i++){
    g.addVertex(vertices[i]);
}


g.addEdge('A','B');
g.addEdge('A','D');
g.addEdge('A','E');
g.addEdge('B','C');
g.addEdge('D','E');
g.addEdge('E','F');
g.addEdge('E','C');
g.addEdge('C','F');


g.printGraph();