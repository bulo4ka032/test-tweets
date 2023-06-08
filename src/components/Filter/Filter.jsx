import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { Form } from './Filter.styled';
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material';

const Filter = ({value , setFilter}) => {
const [selectedItem] = useState(value)

const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
  };

return <Form>
<FormControl sx={{ m: 1, minWidth: 120 }}>
  <Select
    value={value}
    onChange={(event) => handleChange(event)}
    displayEmpty
    inputProps={{ 'aria-label': 'Without label' }}
  >
    <MenuItem value={'Show all'}  selected={'Show all' === selectedItem}>
      <em>Show all</em>
    </MenuItem>
    <MenuItem value={'Following'}  disabled={'Following' === selectedItem} selected={'Following' === selectedItem}>Followings</MenuItem>
    <MenuItem value={'Follow'}  disabled={'Follow' === selectedItem} selected={'Follow' === selectedItem}>Follow</MenuItem>
  </Select>
</FormControl>
</Form>
}

export default Filter