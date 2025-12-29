
import {useState} from 'react';
export default function Customer(){
 const [o,setO]=useState({});
 const items=['burger','kebab','kentang','geprek','esteh','esjeruk'];
 return(<div><h2>Pesan</h2>
 {items.map(i=>(<div key={i}>
  <img src={`/${i}.png`} width="80"/>{i}
  <input type="number" onChange={e=>setO({...o,[i]:e.target.value})}/>
 </div>))}
 <button onClick={()=>{localStorage.setItem('order',JSON.stringify(o));alert('Terkirim')}}>Kirim</button>
 </div>)
}
