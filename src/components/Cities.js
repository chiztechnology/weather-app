import React, { useEffect, useState } from 'react';
import { Select, Loader } from '@mantine/core';
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import CityItem from './CityItem';

const Cities = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  // const dispatch = useDispatch();
  const { weather } = useSelector((state) => state.weather);
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
