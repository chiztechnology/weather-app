import React, { useEffect, useState } from 'react';
import { Loader, Input } from '@mantine/core';
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import CityItem from './CityItem';

const Cities = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  // const dispatch = useDispatch();
  const { cities } = useSelector((state) => state.cities);

  console.log(cities.length);
  return (
    <div>
      <Input
        placeholder="Search for a city or Town"
        rightSection={<FaSearch size={14} />}
        style={{ width: 420 }}
      />
      {/* display grid */}
      <div style={{ alignItems: 'center', justifyContent: 'center' }}>

        {/* <Loader variant="dots" style={{ alignSelf: 'center' }} /> */}
        {loading ? (
          <Loader variant="dots" style={{ alignSelf: 'center' }} />
        ) : (
          cities.length > 0 && cities.map((city) => (
            <CityItem key={city.city} data={city} />
          ))
        )}
      </div>
    </div>
  );
};

export default Cities;
