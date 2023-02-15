import React from 'react';
import { Select, Loader } from '@mantine/core';
import { FaSearch } from 'react-icons/fa';
// import { useSelector } from 'react-redux';

const Cities = () => {
  // const dispatch = useDispatch();
  // const { weather } = useSelector((state) => state.weather);

  // console.log(weather);
  console.log();

  return (
    <div>
      <Select
        label="Find a city"
        placeholder="Search for a city or Town"
        rightSection={<FaSearch size={14} />}
        searchable
        data={[
          { value: 'react', label: 'React' },
          { value: 'ng', label: 'Angular' },
          { value: 'svelte', label: 'Svelte' },
          { value: 'vue', label: 'Vue' },
        ]}
        style={{ width: 420 }}
      />
      {/* display grid */}
      <div style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Loader variant="dots" style={{ alignSelf: 'center' }} />
      </div>
    </div>
  );
};

export default Cities;
