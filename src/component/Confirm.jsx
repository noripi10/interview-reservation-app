import React from 'react';
import { Typography } from '@material-ui/core';

const Confirm = React.memo(() => {
  return (
    <>
      <Typography variant='h6' gutterBottom>
        面接のご予約ありがとうございました。
      </Typography>
      <Typography variant='subtitle1'>
        弊社／人事担当者よりご入力いただいたメールアドレスに
        <br />
        日程調整等の詳細な情報をご返信させていただきます。
      </Typography>
      <Typography component='span'>
        ご予約のキャンセル依頼またはご不明点ございましたら、
        <br />
        下記の電話番号までお問い合わせください。
      </Typography>
    </>
  );
});

export default Confirm;
