// Initial component
const Initial = () => {

	return (
		<div className="initial-container center">
			<h2 className="text-center">Ask a question</h2>
			<input
				name="question"
				type="text"
				className="form-control center mt-4"
			/>

			<button
				className="btn btn-danger center mt-3 d-block"
			>
				Next
			</button>

		</div>
	)
}

export default Initial;