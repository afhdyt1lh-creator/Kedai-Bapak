
import {useEffect,useState} from 'react';
export default function Admin(){
 const [o,setO]=useState({});
 useEffect(()=>{setO(JSON.parse(localStorage.getItem('order')||'{}'))},[]);
 return(<div><h2>Admin</h2><pre>{JSON.stringify(o,null,2)}</pre></div>)
}
