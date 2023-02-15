import React from 'react';
import { Select, Loader } from '@mantine/core';
import { FaSearch } from 'react-icons/fa';

const Cities = () => {
  const a = 0;
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
      {a}

      {/* display grid */}
      <div style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Loader variant="dots" style={{ alignSelf: 'center' }} />
      </div>
    </div>
  );
};

export default Cities;
