import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({ setCurrentPage, currentPage, pages }) {

  function handleChangePage(e, page) {
    setCurrentPage(page)
  }

  return (
    <Stack spacing={2} margin="30px" sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <Pagination onChange={handleChangePage} count={42} variant="outlined" shape="rounded" page={currentPage} />
    </Stack>
  )
}