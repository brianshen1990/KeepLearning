// #id 
// .class
// div
// div[name="value"]

// document.querySelector 

const myQuerySelector = (selector) => {

  const extraSelector = (sel) => {
    let id = null;
    let className = [];
    let tagName = null; 
    let attr = [];
    let index = 0;
    while ( index < sel.length ) {
      // id
      if ( sel[index] === "#" ) {
        index++;
        let beg = index;
        while ( /[_a-zA-Z0-9]/.test(sel[index]) && index < sel.length ) {
          index++;
        }
        id = sel.substring(beg, index);
      } else if ( sel[index] === "." ) {
        // class
        index++;
        let beg = index;
        while ( /[-_a-zA-Z0-9]/.test(sel[index]) && index < sel.length ) {
          index++;
        }
        className.push(sel.substring(beg, index));
      } else if ( sel[index] === "[" ) {
        // attr 
        let beg = index;
        while ( sel[index]!== "]" && index < sel.length ) {
          index++;
        }
        index++;
        attr.push(sel.substring(beg, index));
      } else {
        // type 
        let beg = index;
        index++;
        while ( /[-_a-zA-Z0-9]/.test(sel[index]) && index < sel.length ) {
          index++;  
        }
        tagName = sel.substring(beg, index);
      }
    }

    console.log(`id: ${id} class: ${className} type: ${tagName}, attr: ${attr}`);
    return { id, className, tagName, attr };
  }

  const filterElement = (elem, tagName, classNames, attr) => {
    // const item = document.getElementById("div");
    let ret = [];
    for ( let i = 0 ; i < elem.length ; i++ ) {
      const item = elem[i];
      let match = true;
      // type 
      if ( tagName && item.tagName !== tagName.upperCase()) {
        match = false;
      }
      if ( !match ) {
        continue;
      }
      // class
      if ( classNames && classNames.length > 0 ) {
        for ( let j = 0; j < classNames.length ; j++ ) {
          if ( item.classList.length <= 0 ) {
            match = false;
            break;
          }
          match = false;
          for ( let k = 0; k < item.classList.length ; k++ ) {
            if ( item.classList[i] === classNames[i] ) {
              match = true;
              break;
            }
          }
          if ( !match ) {
            break;
          }
        }
      }
      if ( !match ) {
        continue;
      }
      // attr
      if ( attr && attr.length > 0 ) {
        for ( let j = 0; j < attr.length ; j++ ) {
          // [type="text"]
          let res = /\[([^=]+)=([^\]]+)\]/.exec(attr[j]);
          let key = res[0];
          let value = res[1];
          if ( item.attributes[key] !== value ) {
            match = false;
            break;
          }
        }
      }
      if ( !match ) {
        continue;
      }
      ret.push( item ); 
    }
    return ret;
  }

  const getElement = (doc, sel) => {
    
    const { id, className, tagName, attr } = extraSelector(sel);
    let elem = [];
    if ( id ) {
      elem = doc.getElementById(id);
      elem = elem ? [elem] : null;
      elem = elem && elem.length > 0 && filterElement(elem, tagName, className, attr);
    } else if ( tagName ) {
      elem = doc.getElementsByTagName(tagName);
      elem = elem && elem.length > 0 && filterElement(elem, "", className, attr);
    } else if ( className.length > 0 ) {
      elem = doc.getElementsByClassName( className.join(" ") );
      elem = elem && elem.length > 0 && filterElement(elem, "", [], attr);
    } else {
      // BFS 
      // document.children
    }
    return ( elem && elem.length > 0 ) ? elem[0] : null;
  }

  const arr = selector.split(/[ ]+/).reverse();
  console.log(arr);

  let root = window.document;
  while ( root && arr.length > 0 ) {
    const next = arr.pop();
    root = getElement( root, next );
  }
  return root;
}

const myGetElementByClassName = (selector) => {
  
  let res = [];
  let arr = [window.document];
  while ( arr.length > 0 ) {
    let next = [];
    for ( let i = 0 ; i < arr.length ; i++ ) {
      let item = arr[i];
      // match or not
      if ( item.classList && item.classList.length > 0 ) {
        let found = false;
        for ( let k = 0; k < item.classList.length ; k++ ) {
          if ( item.classList[k] === selector ) {
            found = true;
            res.push(item);
            break;
          }
        }
      }
      // BFS
      for ( let j = 0; j < item.children.length ; j++ ) {
        next.push( item.children[j] );
      }
    }
    arr = next;
  }
  return res;
}


const ready = () => {
  // console.log( myQuerySelector("#div01") );
  // console.log( myQuerySelector("div.class-div") );
  // console.log( myQuerySelector('input[type="text"]') );

  console.log( myGetElementByClassName("class-div") );
}

if ( document.readyState === "complete" ) {
  ready();
} else {
  document.addEventListener("readystatechange", () => {
    if ( document.readyState === "complete" ) {
      ready();
    }
  });
}





