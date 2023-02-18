import React, { useEffect, useState } from 'react';
import { Select, Loader } from '@mantine/core';
import { FaSearch } from 'react-icons/fa';
// import { useSelector } from 'react-redux';
import CityItem from './CityItem';

const Cities = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  // const dispatch = useDispatch();
  // const { weather } = useSelector((state) => state.weather);

  const weather = [{
    id: 1, name: 'london', country: 'United Kingdom', localtime: '12:09 PM', humidity: '80%', temp_c: '23',
  }, {
    id: 2, name: 'paris', country: 'France', localtime: '1:09 PM', humidity: '10%', temp_c: '12',
  }, {
    id: 3, name: 'kinshasa', country: 'DR Congo', localtime: '1:09 PM', humidity: '27%', temp_c: '32',
  }, {
    id: 4, name: 'san francisco', country: 'United States', localtime: '8:09 PM', humidity: '18%', temp_c: '15',
  }];

  const autocompleteArray = [];
  weather.forEach((element) => {
    autocompleteArray.push({ value: element.name, label: element.name });
  });

  return (
    <div>
      <Select
        label="Find a city"
        placeholder="Search for a city or Town"
        rightSection={<FaSearch size={14} />}
        searchable
        data={autocompleteArray}
        style={{ width: 420 }}
      />
      {/* display grid */}
      <div style={{ alignItems: 'center', justifyContent: 'center' }}>

        {/* <Loader variant="dots" style={{ alignSelf: 'center' }} /> */}
        {loading ? (
          <Loader variant="dots" style={{ alignSelf: 'center' }} />
        ) : (
          weather.map((city) => (
            <CityItem key={city.id} data={city} />
          ))
        )}
      </div>
    </div>
  );
};

export default Cities;
