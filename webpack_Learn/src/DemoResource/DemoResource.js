import React, { Suspense } from 'react';
import resource from './CommonResource';

function DemoResourceSingle(props) {
  const data = resource.read(props.id);
  const { message } = data;
  return <div>{message}</div>;
}

function DemoResource() {
  return <div>
      <Suspense fallback="Loading">
        {DemoResourceSingle({id:1111})}
        {DemoResourceSingle({id:1111})}
        {DemoResourceSingle({id:1111})}
        {DemoResourceSingle({id:1112})}
        {DemoResourceSingle({id:1113})}
        {DemoResourceSingle({id:1112})}
        {DemoResourceSingle({id:1113})}
      </Suspense>
    </div>
}


export default DemoResource;