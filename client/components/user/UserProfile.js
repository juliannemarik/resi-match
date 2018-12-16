import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const styles = (theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    height: 'auto',
  },
  card: {
    display: 'flex',
    width: '100%',
    height: '50vh',
    boxShadow: 'none',
    border: '1px solid #D8DEE2',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  profileImg: {
    width: '40%'
  },
});

function UserProfile(props) {
  const { classes, user } = props;
  return (
    <div className={classes.root}>
    <Card className={classes.card}>
    <CardMedia
      className={classes.profileImg}
      image={user.imageUrl}
    />
    <div className={classes.details}>
      <CardContent className={classes.content}>
        <Typography component="h5" variant="h5">
          {`${user.firstName} ${user.lastName}`}
        </Typography>
        <Typography component="h6" variant="h6">
          {user.email}
        </Typography>
        <Typography component="h6" variant="h6">
          {user.address}
        </Typography>
      </CardContent>
    </div>
  </Card>

    </div>
  );
}

const mapState = (state) => {
  return {
    user: state.user.currentUser
  }
}

UserProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapState)(UserProfile));
