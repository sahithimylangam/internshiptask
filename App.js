import './App.css';
import React from 'react';
function App() {
  var data = require('./s1.json');
  for (var i = 0; i < data.length; i++)
{
    var obj = data[i];
    var s1=obj.v1;
    var s2=obj.v2;
    var s3=obj.v3;
    var s4=obj.v4;
}
  return(
    <div>
       <video autoPlay loop muted>
            <source src={s1} type="video/mp4"/>
       </video>
       <video autoPlay loop muted>
            <source src={s2} type="video/mp4"/>
       </video>
       <video autoPlay loop muted>
            <source src={s3} type="video/mp4"/>
       </video>
       <video autoPlay loop muted>
            <source src={s4} type="video/mp4"/>
       </video>
    </div>
  );
  
}

export default App;
