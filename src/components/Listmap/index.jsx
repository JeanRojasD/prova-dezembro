import React from 'react'
import musics from '../../data/musics.json'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './index.css'

function Listmap() {
    return (
        <div className="listmap">
            <TableContainer className="listmap-container" component={Paper}>
                <Table aria-label="a dense table">
                    <TableHead>
                        <TableRow className="color">
                            <TableCell align="left">Música</TableCell>
                            <TableCell align="left">Ano de Lançamento</TableCell>
                            <TableCell align="left">Álbum</TableCell>
                            <TableCell align="left">Visualizações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {musics.map((musics, index) =>
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {musics.music}
                                </TableCell>
                                <TableCell align="left">{musics.year}</TableCell>
                                <TableCell align="left">{musics.album}</TableCell>
                                <TableCell align="left">{musics.views}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
}

export default Listmap;