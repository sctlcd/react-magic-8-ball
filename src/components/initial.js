// Initial component
const Initial = () => {

    return(
        <div>
            <h2 className="text-center">Ask a question</h2>
            <input 
                name="question"
                type="text"
                className="form-control mt-4"
            />

            <button
                className="btn btn-danger mt-4 mx-auto d-block"
            >
                Next
            </button>
        </div>
    )
}

export default Initial;