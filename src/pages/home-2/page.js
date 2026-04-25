import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home2/About"
import Banner from "@/components/sections/home2/Banner"
import Services from "@/components/sections/home2/Services"
import Case from "@/components/sections/home2/Case"
import Team from "@/components/sections/home2/Team"
import Contact from "@/components/sections/home2/Contact"
import Feature from "@/components/sections/home2/Feature"
import Chooseus from "@/components/sections/home2/Chooseus"
import Cta from "@/components/sections/home2/Cta"
import News from "@/components/sections/home2/News"
import Faq from "@/components/sections/home2/Faq"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <Banner />
                <Feature />
                <About />
                <Services />
                <Chooseus />
                <Case />
                <Cta />
                <Team />
                <Faq />
                <News />
                <Contact />
                
            </Layout>
        </>
    )
}