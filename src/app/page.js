import {  
  Navbar,
  Shop,
  Footer
} from "@/components"
import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.main}>
      {/* header */}
      <Navbar/>
      {/* content */}
      <Shop/>
      {/* footer */}
      <Footer/>
    </main>
  );
}
