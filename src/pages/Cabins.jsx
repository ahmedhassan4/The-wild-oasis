import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(() => {
    async function fetchCabins() {
      const cabins = await getCabins();
      console.log(cabins);
    }
    fetchCabins();
  }, []);
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img
        src="https://sbjzwxgkhobybufulssx.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"
        alt="cabin image"
      />
    </Row>
  );
}

export default Cabins;
