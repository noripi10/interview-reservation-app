import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import Calendar from 'react-calendar';

const currencies = [
	{
		value: '',
		label: '',
	},
	{
		value: '9-10',
		label: '9:00~10:00',
	},
];

export default function AddressForm() {
	const [date, setDate] = useState(new Date());

	const getTileContent = ({ date, view }) => {
		// console.log(date);
		return (
			<div>
				<span style={{ fontFamily: 'sans-serif' }}>○</span>
			</div>
		);
	};

	return (
		<React.Fragment>
			<Typography variant="p" gutterBottom>
				カレンダーから日付を押して空き時間洗濯して下さい
			</Typography>
			<div style={{ marginBottom: 10, display: 'flex', flexDirection: 'row' }}>
				<Calendar
					locale="ja-JP"
					value={date}
					onChange={(date) => setDate(date)}
					tileContent={getTileContent}
					showDoubleView={false}
				/>
				<span style={{ fontFamily: 'sans-serif', marginLeft: 10 }}>
					○：空きあり
					<br />
				</span>
			</div>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="reserveDate"
						label="希望日（カレンダーより選択）"
						fullWidth
						disabled
						value={date.toLocaleDateString()}
						onChange={(date) => setDate(date)}
						// helperText="Please select your currency"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="reserveTime"
						select
						label="希望時間"
						fullWidth
						// value={currency}
						// onChange={handleChange}
						// helperText="Please select your currency"
					>
						{currencies.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="lastName"
						name="lastName"
						label="姓"
						fullWidth
						// autoComplete="given-name"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="firstName"
						name="firstName"
						label="名"
						fullWidth
						// autoComplete="family-name"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						id="address"
						name="address"
						label="メールアドレス"
						fullWidth
						// autoComplete="shipping address-level2"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						id="tel"
						name="tels"
						label="電話番号"
						fullWidth
						// autoComplete="shipping address-level2"
					/>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
