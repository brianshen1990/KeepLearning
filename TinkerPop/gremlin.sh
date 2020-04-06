##### For already existed one 
:remote connect tinkerpop.server conf/remote.yaml
graph = TinkerFactory.createModern()
g = graph.traversal();
g.V() # get all vertex ( nodes )
g.V(1).properties();
g.V(1).values();
g.V(1).values('name');
g.V(1).outE('knows');
g.V(1).outE('knows').inV().values('name');
# outE().inV()  => out()
# inE().outV()  => in()
g.V(1).out('knows').has('age', gt(30)).values('name');
g.V().has('person','name','marko').out('created').values('name');
g.V().has('person','name',within('vadas','marko')).values('age');
:exit

##### create our own
:remote connect tinkerpop.server conf/remote.yaml
graph = TinkerGraph.open();
g = graph.traversal()
v1 = g.addV('person').property(T.id, 1).property("name", "marko").property("age", 29).next()
v1.properties()
v2 = g.addV("software").property(T.id, 3).property("name", "lop").property("lang", "java").next()
g.addE("created").from(v1).to(v2).property(T.id, 9).property("weight", 0.4)
g.V().has('name', 'marko').property("sex", "male")
g.V().group().by(label).by('name')

