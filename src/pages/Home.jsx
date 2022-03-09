import Content from "../components/content/Content";

function Home() {
    return(
        <div className="grid grid-cols-12">
            <div className="col-span-8">
                <Content />
            </div>
            <div className="col-span-4">
                <h1>Oder sidebar</h1>
            </div>
        </div>
    )
}

export default Home;