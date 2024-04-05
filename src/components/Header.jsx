
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

















import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from "axios"

export default function SearchAppBar({ setSearch, setCharacters, setCurrentPage, currentPage }) {

  function handleChangeInput(e) {
    setSearch(e.target.value)
    setCurrentPage(1)
  }

  //https://rickandmortyapi.com/api/character/?status=unknown o dead o alive

  function getCharByStatus( status = undefined) {
    axios(`https://rickandmortyapi.com/api/character/?status=${status ? status: ""}`)
    /*Asi es la url con la current page de los filtrados
    axios(`https://rickandmortyapi.com/api/character/?page=${currentPage}&status=${status ? status: ""}`)*/
      .then(({ data }) => {
        setCharacters(data.results);
      })
      .catch((error) => console.log(error));
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Rick and Morty APP
          </Typography>
          <Stack spacing={2} direction="row">
            <Button onClick={() => getCharByStatus("Alive")} variant="contained" color="success">Alive</Button>
            <Button onClick={() => getCharByStatus("Dead")} variant="contained" color="error">Dead</Button>
            <Button onClick={() => getCharByStatus("Unknown")} variant="contained" color="secondary">Unknown</Button>
          </Stack>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase onChange={handleChangeInput}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}