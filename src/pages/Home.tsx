import Combobox from "../components/home/Combobox";
import Loading from "../components/ui/Loading";
import useFetchGet from "../hooks/api/useFetchGet";

const Home: React.FC = () => {
    const { loading, error, data } = useFetchGet("https://jsonplaceholder.typicode.com/posts");
    if (loading) {
        return <div className="container">
            <Loading />
        </div>
    }
    if (error) {
        <div className="container">
            <h3 className="text-white">error in loading data</h3>
        </div>
    }
    if (data) {
        return (<div className="combo-container">
            <Combobox data={data} />
        </div>)
    }
    return (<>
        <div className="container">
            <h3 className="text-white">no data found</h3>
        </div>
    </>)


}

export default Home;