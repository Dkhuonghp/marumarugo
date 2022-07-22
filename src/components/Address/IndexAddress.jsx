// import "./styles.css";
import AddressDisplay from "./AddressDisplay";
import AddressForm from "./AddressForm";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const defaultAddress = {
    name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    phone: ""
  };
  const [addresses, setAddresses] = useState([]);
  const [displayForm, setDisplayFormToggle] = useState(false);
  const URL = "https://621e6868849220b1fc991e29.mockapi.io/address";

  const getData = async () => {
    const getAddresses = await axios.get(URL);
    setAddresses(getAddresses.data);
  };

  useEffect(() => getData(), []);

  return (
    <div className="addressbook-container padding-s flex-column gap-s ">
      <button
        onClick={() => setDisplayFormToggle(true)}
        className="btn btn-primary-solid"
      >
        + Add new address{" "}
      </button>
      {displayForm && (
        <AddressForm
          defaultAddress={defaultAddress}
          addresses={addresses}
          setAddresses={setAddresses}
          setDisplayFormToggle={setDisplayFormToggle}
        />
      )}
      {addresses.map((address, id) => {
        return (
          <AddressDisplay
            key={id}
            address={address}
            addresses={addresses}
            setAddresses={setAddresses}
            setDisplayFormToggle={setDisplayFormToggle}
          />
        );
      })}
    </div>
  );
}
