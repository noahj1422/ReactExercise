import React, { useState } from 'react';

function NameRater() {
	const [name, setName] = useState('');
	const [submittedName, setSubmittedName] = useState('');

	const startsWithVowel = (str) => {
		if (!str) return false;
		return /^[aeiou]/i.test(str);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmittedName(name);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={name}
					onChange={e => setName(e.target.value)}
					placeholder="Enter a name"
				/>
				<button type="submit">Submit</button>
			</form>
			<div style={{ fontSize: '2rem', marginTop: '10px' }}>
				{submittedName && (startsWithVowel(submittedName) ? '😊 That name is epic!' : '😞That name is lame...')}
			</div>
		</div>
	);
}

export default NameRater;
