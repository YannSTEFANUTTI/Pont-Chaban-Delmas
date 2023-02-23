import axios from "axios";

const CallAPI = () => {
  const [datas, setDatas] = useState();
  const apiURL =
    "https://opendata.bordeaux-metropole.fr/api/records/1.0/search/?dataset=previsions_pont_chaban&q=&rows=10000&sort-=date_passage";

  useEffect(() => {
    const url = `${apiURL}`;
    axios.get(url).then((response) => {
      setDatas(response.data);
    });
  }, []);
  console.warn(datas);
};

export default CallAPI;
