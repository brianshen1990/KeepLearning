import gremlin from 'gremlin';

const traversal = gremlin.process.AnonymousTraversalSource.traversal;
const DriverRemoteConnection = gremlin.driver.DriverRemoteConnection;
 
const g = traversal().withRemote(new DriverRemoteConnection('ws://10.21.137.21:8182/gremlin'));

const test = async () => {
  await g.addV('person').property("name", "marko").next();
  const vertex = await g.V().values('name').toList();
  console.log(vertex);
}

test().then( () => {
  console.log('Done');
} ).catch( (err) => {
  console.error( 'Err: ', err );
});
