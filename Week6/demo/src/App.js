import { useState } from 'react';
import d1 from './data'

export default function App() {
  const [data, setData] = useState(d1);

  // function handleReset() {
  //   setData(data + 1);
  // }

  return (
    <>

      <p> {data}</p>


    </>
  );
}

// function Form() {
//   const [name, setName] = useState('Taylor');

//   return (
//     <>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <p>Hello, {name}.</p>
//     </>
//   );
// }


