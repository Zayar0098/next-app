// import styles from "./page.module.css";
import Sheet from "@/app/_components/Sheet";
import Hero from "@/app/_components/Hero";


type Props ={
    children: React.ReactNode;
};

export default function Rootlayout({children} : Props) {
    // return(
    //     <>
    //     <div className ={styles.container}>{children}</div>
    //     </>
    // );
    return (
        <>
        <Hero title ="Members" sub = "メンバー"/>
    <Sheet>{children}</Sheet>
    </>
    );
}
