const RemoveAllContact = (props) => {
    return(
        <div>
            <button onClick={() => props.handleRemoveAllContact()} className="btn btn-danger form-control">Remove All</button>
        </div>
    );
}

export default RemoveAllContact;