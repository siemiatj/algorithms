const fs = require('fs');
const readline = require('readline');
const path = require('path');
const PATHARG = process.argv[2];
const filePath = path.resolve(__dirname, PATHARG);
const lineReader = readline.createInterface({
  input: fs.createReadStream(filePath)
});

let parsedLine, head, tail;
let adjacentList = [];

lineReader.on('line', function (line) {
  parsedLine = line.split(/\s+/);
  tail = parseInt(parsedLine[0], 10) - 1;
  head = parseInt(parsedLine[1], 10) - 1;

  if (adjacentList[tail] != null) {
    adjacentList[tail].push(head);
  } else {
    adjacentList[tail] = [head];
  }
}).on('close', () => {
  let componentsArray = connectedComponents(adjacentList);
  
  componentsArray.sort((a, b) => {
    if (a.length > b.length) {
      return -1;
    }
    if (a.length < b.length) {
      return 1;
    }
    return 0;
  });
  componentsArray = componentsArray.slice(0, 5);
  
  let strongComponentsAmount = [];
  for (c of componentsArray) {
    strongComponentsAmount.push(c.length)
  }

  console.log('Connected components: ', strongComponentsAmount);
});

function connectedComponents(vertices) {
  let visited = new Array(vertices.length);
  for(let i=0; i<vertices.length; ++i) {
    visited[i] = false
  }

  let components = [];
  for(i=0; i<vertices.length; ++i) {
    if(visited[i]) {
      continue;
    }

    let toVisit = [i];
    let cc = [i];
    visited[i] = true;

    while(toVisit.length > 0) {
      let v = toVisit.pop();
      let nbhd = vertices[v];
      if (!nbhd) {
        continue;
      }

      for(let j=0; j<nbhd.length; ++j) {
        let u = nbhd[j];
        if(!visited[u]) {
          visited[u] = true;
          toVisit.push(u);
          cc.push(u);
        }
      }
    }
    components.push(cc);
  }
  return components;
}
