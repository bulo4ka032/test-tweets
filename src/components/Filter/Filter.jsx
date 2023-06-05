import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

const Filter = ({value = 'Show all', onChange}) => {
const [filter, setFilter] = useState('')
const [selectedItem, setSelectedItem] = useState(value)

const handleChange = (event) => {
    setFilter(event.target.value);
  };

//   console.log(filter);
//   console.log(selectedItem);

return <div>
<FormControl sx={{ m: 1, minWidth: 120 }}>
  <Select
    value={filter}
    onChange={handleChange}
    displayEmpty
    inputProps={{ 'aria-label': 'Without label' }}
  >
    <MenuItem value={'Show all'} onClick={() => onChange(filter, setFilter, setSelectedItem)} disabled={'Show all' === selectedItem} selected={'Show all' === selectedItem}>
      <em >Show all</em>
    </MenuItem>
    <MenuItem value={'Followings'} onClick={() => onChange(filter, setFilter, setSelectedItem)} disabled={'Followings' === selectedItem} selected={'Followings' === selectedItem}>Following</MenuItem>
    <MenuItem value={'Follow'} onClick={() => onChange(filter, setFilter, setSelectedItem)} disabled={'Follow' === selectedItem} selected={'Follow' === selectedItem}>Follow</MenuItem>
  </Select>
</FormControl>
</div>
}

export default Filter