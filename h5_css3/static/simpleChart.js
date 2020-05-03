const simpleChart = {

  drawBar: ({ data, element, height, width }) => {
    const margin_top = 10;
    const margin_bottom = 15;
    const margin_left = 10;
    const margin_right = 10;

    const createSVGElement = (type) => {
      return document.createElementNS('http://www.w3.org/2000/svg', type);
    }
    const fragment = document.createDocumentFragment();
    // X AXIS
    const xAxis = createSVGElement('line');
    xAxis.setAttribute("x1", margin_left);
    xAxis.setAttribute("y1", height - margin_bottom);
    xAxis.setAttribute("x2", width - margin_right);
    xAxis.setAttribute("y2", height - margin_bottom);
    xAxis.setAttribute("stroke-width", "1");
    xAxis.setAttribute("stroke", "gray");
    fragment.appendChild( xAxis );
    // Y AXIS
    const yAxis = createSVGElement('line');
    yAxis.setAttribute("x1", margin_left);
    yAxis.setAttribute("y1", margin_top);
    yAxis.setAttribute("x2", margin_left);
    yAxis.setAttribute("y2", height - margin_bottom);
    yAxis.setAttribute("stroke-width", "1");
    yAxis.setAttribute("stroke", "gray");
    fragment.appendChild( yAxis );

    // calculate x points
    const len = Object.keys( data ).length;
    // usable width  (width - margin_left - margin_right) 
    const _width = Math.floor( (width - margin_left - margin_right) / (len * 2 + 1) );
    const rects = [];
    Object.keys( data ).map ( (item, index) => {
      rects.push({
        label: item,
        x: 10 + _width * ( 2 * index + 1 ),
      })
    });

    // calculate y points
    const values = Object.values( data );
    const max = Math.max(...values) * 1.1 ;
    values.map( (item, index) => {
      const _height = ( item / max ) * (height - margin_top - margin_bottom);
      rects[index].height = _height
      rects[index].y = height - margin_bottom - _height;
      rects[index].value = item;
    });

    rects.map( item => {
      const rect = createSVGElement('rect');
      rect.setAttribute("x", item.x);
      rect.setAttribute("y", item.y);
      rect.setAttribute("width", _width);
      rect.setAttribute("height", item.height);

      const text = createSVGElement('text');
      text.setAttribute("x", item.x);
      text.setAttribute("y", height);
      text.textContent = item.label;

      const value = createSVGElement('text');
      value.setAttribute("x", item.x);
      value.setAttribute("y", item.y-2);
      value.textContent = item.value;

      fragment.appendChild( rect );
      fragment.appendChild( text );
      fragment.appendChild( value );
    });
    
    // y axis scale


    const svg = document.getElementById(element);
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    svg.appendChild( fragment );
  },
  version: '0.0.1'

}