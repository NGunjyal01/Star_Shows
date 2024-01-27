import { getDatabase, ref, child, get } from "firebase/database";
import { useSelector } from "react-redux";


const Watchlist = () => {

  const user = useSelector(store => store.user.uid)

  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/${user}`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
  return (  
    <div className='bg-[#141414] h-screen text-white'>
        hello
    </div>
  )
}

export default Watchlist
