import React from 'react';
import { FixedSizeList } from 'react-window';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import _ from 'lodash';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    minWidth: 80,
    margin: 5,
    marginTop: 20,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const ReservableList = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const renderRow = (props) => {
    const { index, style } = props;
    const labelId = `transfer-list-item-${index}-label`;
    return (
      <ListItem
        key={index}
        role={undefined}
        dense
        button
        onClick={handleToggle(index)}
      >
        <ListItemIcon>
          <Checkbox
            edge='start'
            checked={checked.indexOf(index) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{
              'aria-labelledby': labelId,
            }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={`Line item ${index + 1}`} />
      </ListItem>
    );
  };

  return (
    <div className={classes.root}>
      <span>空き時間</span>
      <FixedSizeList height={400} width={200} itemSize={46} itemCount={10}>
        {renderRow}
      </FixedSizeList>{' '}
    </div>
  );
};
