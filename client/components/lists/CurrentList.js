// EXTERNAL IMPORTS
import React, {Component} from 'react'
import {connect} from 'react-redux'

// MATERIAL UI IMPORTS
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    width: '100vw',
    height: window.innerHeight - 64,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tablePaper: {
    width: '70%',
    height: 'auto'
  },
  table: {
    width: '100%'
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    fontWeight: 300,
    letterSpacing: theme.spacing.unit * 1 / 4
  }
})

class CurrentList extends Component {
  handleRestart = () => {
    console.log('RESTARTING')
  }
  render() {
    const {classes} = this.props
    return Object.keys(this.props.currentList).length ? (
      <div className={classes.root}>
        <Paper className={classes.tablePaper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>RANK</TableCell>
                <TableCell>SCHOOL</TableCell>
                <TableCell numeric>SCORE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.currentList.schools.map((school, idx) => {
                return (
                  <TableRow key={school.name}>
                    <TableCell component="th" scope="row">
                      {idx + 1}
                    </TableCell>
                    <TableCell>{school.name}</TableCell>
                    <TableCell numeric>{school.score}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Paper>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
          onClick={this.handleRestart}
        >
          RESTART
        </Button>
      </div>
    ) : (
      <div>NO LISTS</div>
    )
  }
}

const mapState = state => {
  return {
    currentList: state.list.currentList
  }
}

export default withStyles(styles)(connect(mapState)(CurrentList))
