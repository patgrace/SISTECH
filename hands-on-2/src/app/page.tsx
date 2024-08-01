import { CardListContainer } from "@/components/Card/CardListContainer";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { PathContainer } from "@/components/Path/PathContainer";




export default function HomePage() {
    return ( 
    <>
    <Header/>
    <Hero/>
    <PathContainer/>
    <CardListContainer/>
    </>
    );
  }