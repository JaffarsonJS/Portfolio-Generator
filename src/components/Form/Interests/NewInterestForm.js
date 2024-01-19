import React, { useState } from "react";
import { connect } from "react-redux";
import { createInterest } from "./actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const NewInterestForm = ({ interests=[], onCreatePressed }) =>{

    const [interest, setInterest] = useState('');

    return(
        <div className='shadow'>
    <div className="border rounded p-3 m-0">
            <input 
                className="form-control form-control-sm mb-2"
                type="text"
                placeholder="Describe your interests in a few words..."
                value={interest}
                onChange={e => setInterest(e.target.value)}
            />          
        <div className="text-right">
            <button style={{background:'#126ccc'}}
                className="btn btn-success btn-sm rounded-circle"
                disabled={interest === ''}
                onClick={()=>{
                    onCreatePressed({interest});
                    setInterest('');
                }}
            >
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    </div>
    </div>
    )
}

const mapStateToProps = state =>({
    interests: state.interests,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: interest => dispatch(createInterest(interest)),
});

export default connect(mapStateToProps,mapDispatchToProps)(NewInterestForm);
