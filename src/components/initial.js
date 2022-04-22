const Initial = () => {

	return (
		<div className="initial-container center">
			<h1>Ask a question</h1>
			<input
				name="question"
				type="text"
				className="form-control center mt-4"
			/>

			<button
				className="btn btn-dark center mt-3"
			>
				Next
			</button>

		</div>
	)
}

export default Initial;