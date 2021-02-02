import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { useRecoilValue } from 'recoil';
import { inputState } from '../store/store';
import { Divider } from '@material-ui/core';

const products = [
  { name: '希望日', desc: '', value: 'date' },
  { name: '希望時間', desc: '', value: 'timeLabel' },
  { name: '氏名', desc: '', value: 'name' },
  { name: 'ひらがな', desc: '', value: 'kanaName' },
  { name: 'メールアドレス', desc: '', value: 'mailAddress' },
  { name: '電話番号', desc: '', value: 'tel' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const inputItem = useRecoilValue(inputState);
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* <Typography variant='h6' gutterBottom>
        Order summary
      </Typography> */}
      <List disablePadding>
        {products.map((product) => (
          <React.Fragment key={product.name}>
            <ListItem className={classes.listItem} key={product.name}>
              <ListItemText primary={product.name} secondary={''} />
              <Typography variant='body2'>
                {inputItem[product.value]}
              </Typography>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
      <Grid container spacing={2}></Grid>
    </React.Fragment>
  );
}
