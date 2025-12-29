
import {useRouter} from 'next/router';
export default function Home(){
 const r=useRouter();
 return(<div style={{background:'#222',color:'#fff',minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
  <h1>Kedai Bapak</h1>
  <input placeholder="admin" id="u"/><input placeholder="password" id="p" type="password"/>
  <button onClick={()=>{ if(u.value==='admin'&&p.value==='123') r.push('/admin')}}>Login Admin</button>
  <button onClick={()=>r.push('/customer')}>Lanjut sebagai Customer</button>
 </div>)
}
