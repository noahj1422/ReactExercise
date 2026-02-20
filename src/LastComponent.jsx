import React, { useState } from 'react';

const zodiacSigns = {
	january: 'Capricorn',
	february: 'Aquarius',
	march: 'Pisces',
	april: 'Aries',
	may: 'Taurus',
	june: 'Gemini',
	july: 'Cancer',
	august: 'Leo',
	september: 'Virgo',
	october: 'Libra',
	november: 'Scorpio',
	december: 'Sagittarius',
};

function LastComponent() {
	const [month, setMonth] = useState('');
	const [submittedMonth, setSubmittedMonth] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmittedMonth(month.toLowerCase());
	};

	return (
		<div>
			<h2>Find Your Zodiac Sign</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={month}
					onChange={e => setMonth(e.target.value)}
					placeholder="Enter your birth month"
				/>
				<button type="submit">Submit</button>
			</form>
			<div style={{ fontSize: '1.5rem', marginTop: '10px' }}>
				{submittedMonth && (
					zodiacSigns[submittedMonth]
						? `Your zodiac sign is: ${zodiacSigns[submittedMonth]}`
						: 'Invalid month entered.'
				)}
			</div>
		</div>
	);
}

export default LastComponent;
