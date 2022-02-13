import React from 'react';

const User = (props) => {
  const render = props.render;
  console.log(render);
  let kita;
  if (render){
    kita = <h1>huumaon</h1>
  } else{
    kita = <h3>Boltu</h3>
  }
    return (
        <div>
            {
                render ? <p>Tomake ami food khabaoba </p>: <p>Lathi mere bhoot chutai dibo</p>
            }
           
           <div>
               {kita}
           </div>
           <div>
               {
                   render && <p>abudl hia</p>
               }
           </div>
        </div>
        
    );
};

export default User;