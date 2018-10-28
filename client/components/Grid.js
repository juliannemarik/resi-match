// EXTERNAL IMPORTS
import React from 'react';
import PropTypes from 'prop-types';

// MATERIAL UI IMPORTS
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';

let tileData=[];
for (let i = 0; i < 9; i++){
  tileData.push({
    key: i,
    img: 'https://www.bristolgate.com/wp-content/uploads/2018/09/orionthemes-placeholder-image.png',
    title: 'Image',
    author: 'author'
  })
}
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '70%',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

const Grid = (props) => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <GridList cellHeight={230} className={classes.gridList} cols={3} spacing={15}>
        {tileData.map(tile => (
          <GridListTile key={tile.key} cols={1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
  </div>
  )
}

Grid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Grid);
